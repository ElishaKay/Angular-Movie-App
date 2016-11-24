var app = angular.module("appName", []);

app.factory('badNamesService', function(){
  var badNamesForKids = ["Keerolepa", "Elzenon", "Jultana", "Chintma", "Bss"];

  return { 
    badNames: badNamesForKids 
  };
});