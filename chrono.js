$(document).ready(function(){
	var secondes = 10;
	var minutes = 00;
	var dixiemeSeconde = 0;
	var on = false;
	var reset = false;

	$('.play').click(function(){
		Start();
	});

	$('.init').click(function(){
		Reset();
	});

	function chrono() {
		secondes = secondes + 1;

		if (secondes > 59) {
			minutes = minutes + 1;
			secondes = 0;
		}
		afficher(minutes, secondes);
	}

	function compteARebours() {
		dixiemeSeconde = dixiemeSeconde - 1;

		if (secondes === 0 && minutes === 0 && dixiemeSeconde === 0) {
			arreterCompteARebours();
		}

		if (dixiemeSeconde < 0) {
			secondes = secondes - 1;
			dixiemeSeconde = 9;
		}

		if (secondes < 0) {
			secondes = 59;
			minutes = minutes - 1;
		}
		afficher(minutes, secondes, dixiemeSeconde);
	}

	function afficher(minutes, secondes, dixiemeSeconde) {

		// if (minutes < 10 && secondes < 10) {
		// 	$('.timer').html("0" + minutes + " : 0" + secondes);
		// } else if (minutes < 10 && secondes >= 10) {
		// 	$('.timer').html("0" + minutes + " : " + secondes);
		// } else if (minutes >= 10 && secondes < 10) {
		// 	$('.timer').html(+ minutes + " : 0" + secondes);
		// } else if (minutes >= 10 && secondes > 10) {
		// 	$('.timer').html(+ minutes + " : " + secondes);
		// }

		if (secondes < 10) {
			secondes = "0" + secondes;
		};

		if (minutes < 10) {
			minutes = "0" + minutes;
		};

		$('.timer').html(minutes + " : " + secondes + " . " + dixiemeSeconde);
	}

	function Start() {
		if (on === false) {
			timerID = setInterval(compteARebours, 100);
			on = true;
			reset = false;
		}
	}

	function arreterCompteARebours() {
		clearInterval(timerID);
	}

	function Reset() {
		if (reset === false) {
			clearInterval(timerID);
			secondes = 0;
			minutes = 5;
			dixiemeSeconde = 0;
			afficher(minutes, secondes, dixiemeSeconde);
			reset = true;
			on = false;
		}
	}

});