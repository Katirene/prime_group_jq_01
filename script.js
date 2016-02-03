function Fruit (name, price){
	this.name = name;
	this.price = price;
}

var apples = new Fruit ('apples', randomNumber(50, 999));
var oranges = new Fruit ('oranges', randomNumber(50, 999));
var bananas = new Fruit ('bananas', randomNumber(50, 999));
var grapes = new Fruit ('grapes', randomNumber(50, 999));


var fruitArray = [apples, oranges, bananas, grapes];

console.log(fruitArray);

$(document).ready(function(){
	$('.apples').append(fruitArray[0].price / 100);
	$('.oranges').append(fruitArray[1].price / 100);
	$('.bananas').append(fruitArray[2].price / 100);
	$('.grapes').append(fruitArray[3].price / 100);

	// var setInitial = setInterval( function() {

	// }


});


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}



var intervalID = window.setInterval(priceAdjust, 7000);

function priceAdjust() {
	for(var i = 0; i < fruitArray.length; i++){
	fruitArray[i].price += randomNumber(-50,50);
	 if (fruitArray[i].price > 999) {
	 	fruitArray[i].price = 999; 
	 } else if (fruitArray[i].price < 50) {
	 	fruitArray[i].price = 50;
	 }
	console.log(fruitArray[i].price);
	}
}

console.log(intervalID);
// // randomNumber(0.50, 9.99);
// // console.log(randomNumber(0.50, 9.99));
// // });