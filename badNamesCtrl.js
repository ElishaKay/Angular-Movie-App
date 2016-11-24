app.controller('badNamesCtrl', function($scope, badNamesService) {
  $scope.badNames = badNamesService.badNames;
});