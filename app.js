var app = angular.module("appName", []);

app.factory('PeopleService', function(){
  var People = [{name: "Reservoir Dogs", img: "img/reservoirDogs.jpg", description: "A group of thieves assemble to pull of the perfect diamond heist. It turns into a bloody ambush when one of the men turns out to be a police informer. As the group begins to question each other's guilt, the heightening tensions threaten to explode the situation before the police step in."}, 
  		{name: 'Edge of Tomorrow', img: 'img/edgeOfTomorrow.jpg', description: 7}, 
  		{name: 'Jack', img: 'Smallnuts', description: 10}];

  return { 
    People: People 
  };
});
