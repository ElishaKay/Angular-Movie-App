app.controller('PeopleCtrl', function($scope, PeopleService) {
  $scope.People = PeopleService.People;


  $scope.stuff = [];

	$scope.pushToArray = function(){
    $scope.stuff.push($scope.userText);
    console.log($scope.stuff);

  $scope.animate = true;
};


});