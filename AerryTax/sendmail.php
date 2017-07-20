<?php

	if(count($_POST) > 0) {
		
		$fName = $_POST['fName'];
		$lName = $_POST['lName'];
		$email = $_POST['emailComplete'];
		$phone = $_POST['phone'];
		$comments = $_POST['message'];
		$header = "Content-Type: text/html\r\nReply-To: $email\r\nFrom: $fName <$email>";
		
		$bodyAerry = 
		@"Email sent from ".$_SERVER['REMOTE_ADDR']." at ".date("d/m/Y H:i",time())."<br />
		<hr />
		$fName $lName
		<hr />
		$email
		<hr />	
		$phone
		<hr />
		$comments
		<hr />		
		Email end";

		$bodyCustomer = 
		@"Email sent from ".$_SERVER['REMOTE_ADDR']." at ".date("d/m/Y H:i",time())."<br />
		<hr />
		Thanks for sending email.
		<br>
		A Team member from Aerry Tax will contact you shortly
		<hr />		
		Email end";

		// if(mail("YOUR EMAIL", "A user sent you an email", $body, $header)) {
		if(mail("info@ataccounting.com.au", "A user sent you an email", $bodyAerry, $header)) {
			if(mail($email, "Reply from Aerry tax", $bodyCustomer, $header)) {
				die("true");	
			} else {
				die("There was an error sending the email.");	
			}			
			//die("true");	
		} else {
			die("There was an error sending the email.");	
		}
	}
	
?>