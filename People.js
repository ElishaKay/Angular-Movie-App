app.controller('PeopleCtrl', function($scope, PeopleService) {
  $scope.People = PeopleService.People;
});