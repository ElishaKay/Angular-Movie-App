app.controller('exercisectrl1', function($scope) {
  $scope.stuff = [];

  $scope.pushToArray = function(){
    $scope.stuff.push($scope.userText);
    console.log($scope.stuff);
}
});
