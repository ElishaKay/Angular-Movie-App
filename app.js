var app = angular.module("appName", []);

app.factory('badNamesService', function(){

		app.factory('PeopleService', function(){
  var People = [{name: 'Elisha', lname: 'Kramer', severity: 3}, {name: 'Sara', lname: 'Abrams', severity: 7}, {name: 'Jack', lname: 'Smallnuts', severity: 10}];

  return { 
    People: People 
  };
});
