var number = prompt("enter a number");

var 

var arrayString = number.split("");

for (i = 0; i < (number.length - 1); i++) { 
    if (Number(arrayString[i]) % 2 ===0 && Number(arrayString[i+1]) % 2 === 0 ) {
    	console.log(arrayString[i] + "-"  ) }
    	else {
    	console.log(arrayString[i]);
    	}
    }


----------------------
Angular Stuff (to place within your HTML Sheet - you need to first npm init with angular sheet)

	<div ng-app>
		<label>Dog Name:</label>
		<input type="text" ng-model="dogName" placeholder="Enter a name here">
		<br>
		<label>Cat Name:</label>
		<input type="text" ng-model="catName" placeholder="Enter a name here">
		<br>
		<label>Dog Weight</label>
		<input type="number" ng-model="dogWeight" placeholder="Enter a name here">
		<br>
		<label>Cat Weight</label>
		<input type="number" ng-model="catWeight" placeholder="Enter a name here">

		<hr>

		<p>
			{{dogName}} and {{catName}} stepped onto a scale. Together, they weigh {{dogWeight + catWeight}}!
		</p>

