var app = angular.module("appName", ['ngAnimate']);

app.factory('PeopleService', function(){
  var People = [{name: "Reservoir Dogs", img: "img/reservoirDogs.jpg", description: "A group of thieves assemble to pull of the perfect diamond heist. It turns into a bloody ambush when one of the men turns out to be a police informer. As the group begins to question each other's guilt, the heightening tensions threaten to explode the situation before the police step in."}, 
  		{name: 'Edge of Tomorrow', img: 'img/edgeOfTomorrow.jpg', description: "When Earth falls under attack from invincible aliens, no military unit in the world is able to beat them. Maj. William Cage (Tom Cruise), an officer who has never seen combat, is assigned to a suicide mission. Killed within moments, Cage finds himself thrown into a time loop, in which he relives the same brutal fight -- and his death -- over and over again."}, 
  		{name: 'Dunston Checks In', img: 'img/dunston.jpg', description: "Robert, hoping to be rewarded with some time off of work to relax with his sons (Eric Lloyd, Graham Sack), vows to put the utmost care into his duties -- a task that's complicated by one guest's unruly, light-fingered orangutan, Dunston."},
  		{name: 'The Rock', img: 'img/therock.jpg', description: "FBI chemical warfare expert Stanley Goodspeed (Nicolas Cage) is sent on an urgent mission with a former British spy, John Patrick Mason (Sean Connery), to stop Gen. Francis X. Hummel (Ed Harris) from launching chemical weapons on Alcatraz Island into San Francisco."}];

  return { 
    People: People 
  };
});

