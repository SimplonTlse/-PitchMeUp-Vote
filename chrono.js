$(document).ready(function(){
	var secondes = 00;
	var minutes = 05;
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
		secondes = secondes - 1;

		if (secondes === 0 && minutes === 0) {
			arreterCompteARebours();
		}

		if (secondes < 0) {
			secondes = 59;
			minutes = minutes - 1;
		}
		afficher(minutes, secondes);
	}

	function afficher(minutes, secondes) {

		if (minutes < 10 && secondes < 10) {
			$('.timer').html("0" + minutes + " : 0" + secondes);
		} else if (minutes < 10 && secondes >= 10) {
			$('.timer').html("0" + minutes + " : " + secondes);
		} else if (minutes >= 10 && secondes < 10) {
			$('.timer').html(+ minutes + " : 0" + secondes);
		} else if (minutes >= 10 && secondes > 10) {
			$('.timer').html(+ minutes + " : " + secondes);
		}
	}

	function Start() {
		if (on === false) {
			timerID = setInterval(compteARebours, 1000);
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
			minutes = 0;
			$('.timer').html("00  :  00");
			reset = true;
		}
	}

});