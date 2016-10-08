<?php

header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Origin: *");

$to = 'vaibhav88sharma@gmail.com';
$subject = "Beautiful HTML Email using PHP by CodexWorld";
// Get HTML contents from file

    $postdata = file_get_contents("php://input");
    $htmlContent = json_decode($postdata);
	
	
	@$fName  =   $htmlContent->fName;
	@$lName  =   $htmlContent->lName;
	@$email  =   $htmlContent->email;
	@$phone  =   $htmlContent->phone;
  /*
  @$message  =   $htmlContent->message;
  */

echo $data->name;
// Set content-type for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: vaibhav88sharma@gmail.com' . "\r\n";
$headers .= 'Cc: vaibhav88sharma@gmail.com' . "\r\n";

// Send email
if(mail($to,$subject,$htmlContent,$headers)):
	$successMsg = 'Email has sent successfully.';
else:
	$errorMsg = 'Some problem occurred, please try again.';
endif;
?>
