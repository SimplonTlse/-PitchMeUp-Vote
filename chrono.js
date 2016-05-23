$(document).ready(function(){
	var secondes = 5;
	var minutes = 0;
	var dixiemeSeconde = 0;
	var on = false;
	var reset = false;
	var player;

	var start_date = null;

	$('.play').click(function(){
		syncroCpteRebours();
		Start();
		initPlayer();
	});

	$('.reinitialiser').click(function(){
		Reset();
	});

	var timeoutID;

	function compteARebours() {
		var now = Date.now();
		console.log(start_date, now, (now-start_date)/1000);
		dixiemeSeconde = dixiemeSeconde - 1;
		// var interrupteur = true;
		var reset = true;
		
		if (secondes === 0 && minutes === 0 && dixiemeSeconde === 0) {
			arreterCompteARebours();
			$(".input").hide();
			$(".timer").hide();
			$(".btn").hide();
			$(".video").show();
			timeup();
			
			// Clignotement rouge noir avant la mise en place de la vidéo
			/* timeoutID = window.setInterval(function(){
				effaceCouleur();
				if (interrupteur) {
					noir();
				} else {
					rouge();
				}
				interrupteur = !interrupteur;
			}); */
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
		if (secondes < 10) {
			secondes = "0" + secondes;
		};

		if (minutes < 10) {
			minutes = "0" + minutes;
		};

		$('.timer').html(minutes + " : " + secondes + " . " + dixiemeSeconde);
	}

	var timerID;
	// var start_date = Date.now();
	// console.log(start_date);
	function Start() {
		if (on === false) {
			start_date = Date.now();
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
			clearInterval(timeoutID);
			noir();
			secondes = 0;
			minutes = 5;
			dixiemeSeconde = 0;
			afficher(minutes, secondes, dixiemeSeconde);
			reset = true;
			on = false;
			/* Clignotement rouge et noir
			$('body').removeClass('bg-red');
			$('.play').removeClass('bg-red');
			$('.reinitialiser').removeClass('bg-red');
			$('.timer').removeClass('bg-red'); */
		}
	}
	
	function noir() {
		$('body').addClass('bg-black');
		$('.play').addClass('bg-black');
		$('.reinitialiser').addClass('bg-black');
		$('.timer').addClass('bg-black');
	}

	// Clignotement rouge et noir avant mise en place de la vidéo
	/* function effaceCouleur() {
		$('body').removeClass('bg-black');
		$('.play').removeClass('bg-black');
		$('.reinitialiser').removeClass('bg-black');
		$('.timer').removeClass('bg-black');

		$('body').removeClass('bg-red');
		$('.play').removeClass('bg-red');
		$('.reinitialiser').removeClass('bg-red');
		$('.timer').removeClass('bg-red');
	}

	function rouge() {
		$('body').addClass('bg-red');
		$('.play').addClass('bg-red');
		$('.reinitialiser').addClass('bg-red');
		$('.timer').addClass('bg-red');
	} */

	function syncroCpteRebours() {
		var bla = $('#time-change').val();
		var b = parseInt(bla);

		if (bla === '') {
			Reset();
		} else if (b) {
			if (b > 0) {
				minutes = bla;
				secondes = 0;
				dixiemeSeconde = 0;
			} else {
				Reset();
			}
		} else {
			Reset();
		}
		afficher(minutes, secondes, dixiemeSeconde);
	}

	/* function chrono() {
		secondes = secondes + 1;

		if (secondes > 59) {
			minutes = minutes + 1;
			secondes = 0;
		}
		afficher(minutes, secondes);
	} */

});
