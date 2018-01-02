/*noteWrangler.controller('NotesCreateController', function ($scope) {});*/
angular.module('homeModule').controller('taxationController', function ($scope, $routeParams, $location, taxationService, $timeout, $filter, filterFilter) {
    //taxationService.getSelTaxResource($routeParams.id).then(function (data) {
    //    debugger;
    //    $scope.tabs = data;
    //}).finally(function (data) {
    //});

    taxationService.getSelTaxResource($routeParams.id).then(function (data) {
        $scope.tabs = data.tabs;
        var keepGoing = true;
        angular.forEach(data.tabs, function (value) {
            if (keepGoing) { 
                if (value.id == $routeParams.id) {
                    $scope.description1 = value.description1;
                    $scope.description2 = value.description2;
                    $scope.title1 = value.title;
                    $scope.servicesList = value.servicesList;
                    $scope.servicesListH1 = value.servicesListH1;
                    $scope.servicesListH2 = value.servicesListH2
                    keepGoing = false;
                }
                else {
                    $scope.description1 = "Welcome To Aerry Tax";
                    $scope.description2 = "Welcome To Aerry Tax";
                    $scope.title1 = "Welcome To Aerry Tax";
                }
            }
        });
    }).finally(function (data) {
        //console.log($scope.description1);
        //console.log($scope.description2);
        //console.log($scope.title1);
    });

    $scope.selectedOption = function () {
        if ((filterFilter($scope.servicesList, { selected: 1 })) || (filterFilter($scope.servicesList, { selected: true }))) {
            //debugger;
            var sum = "";
            angular.forEach($scope.servicesList, function (value, key) {
                //debugger;
                if ((value.selected == 1) || (value.selected == true)) {
                    //debugger;
                    sum = parseInt(sum =="" ? 0 : sum) + parseInt(value.cost);
                }

                //$scope.enrolmentData.vrt_courseArray.push(
                //      {
                //          'CourseCode': value.CourseCode,
                //          'CourseID': value.CourseID,
                //          'CourseName': value.CourseName
                //      }
                //);
            });
            //debugger;
            return (sum == "" ? 0 : sum);
        }
    }//({{(servicesList | filter:{selected:1}) }})

});