function Fruit (name, price, quantity){
	this.name = name;
	this.price = price;
	this.quantity = quantity;
}

var apples = new Fruit ('apples', randomNumber(50, 999), 0);
var oranges = new Fruit ('oranges', randomNumber(50, 999), 0);
var bananas = new Fruit ('bananas', randomNumber(50, 999), 0);
var grapes = new Fruit ('grapes', randomNumber(50, 999), 0);


var fruitArray = [apples, oranges, bananas, grapes];

var userCash = 10000;


// var $el = $('meowCats').children().last();
// 	$el.data('catvalue', counter);

console.log(fruitArray);

$(document).ready(function(){
	$('p .applesPrice').text(fruitArray[0].price / 100);
	var $el = $('#apples').children().find('.applesPrice');
 	$el.data('price-apples', fruitArray[0].price / 100);

 	$('p .orangesPrice').text(fruitArray[1].price / 100);
	var $el = $('#oranges').children().find('.orangesPrice');
 	$el.data('price-oranges', fruitArray[1].price / 100);

 	$('p .bananasPrice').text(fruitArray[2].price / 100);
	var $el = $('#bananas').children().find('.bananasPrice');
 	$el.data('price-bananas', fruitArray[2].price / 100);

 	$('p .grapesPrice').text(fruitArray[3].price / 100);
	var $el = $('#grapes').children().find('.grapesPrice');
 	$el.data('price-grapes', fruitArray[3].price / 100);

	$('p .user').text(userCash / 100);
	var $el = $('#user').children().find('.user');
 	$el.data('user-money', userCash/100);


	console.log($('.applesPrice').data('price-apples'));

	$('.apples').on('click', function() {
		buyFruit(apples);
		$('.user').text(userCash/100);
	});


	// 	var newApplesPrice = $('.applesPrice').data('price-apples');
	// 	buyFruit(applePrice);
	// 	console.log(newApplesPrice);
	// });

});

function buyFruit(fruit){
	userCash -= fruit.price;
	fruit.quantity++;
	console.log(fruit.quantity);
	console.log(userCash);
}

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
	 $('p' + array[i].name).text(fruitArray[3].price / 100);fruitArray[i].price
	console.log(fruitArray[i].price);
	}
}


// // randomNumber(0.50, 9.99);
// // console.log(randomNumber(0.50, 9.99));
// // });