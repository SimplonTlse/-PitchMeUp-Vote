$(document).ready(function(){
	var secondes = 0;
	var minutes = 5;
	var dixiemeSeconde = 0;
	var on = false;
	var reset = false;
	var player;

	var duration = 0;
	$('.play').click(function(){
		syncroCpteRebours();
		Start();
		initPlayer();
	});

	$('.reinitialiser').click(function(){
		Reset();
	});

	// $("#player").click(function(){
	// 	$(".video").hide();
	// 	$(".input").show();
	// 	$(".timer").show();
	// 	$(".btn").show();
	// });

	// function chrono() {
	// 	secondes = secondes + 1;

	// 	if (secondes > 59) {
	// 		minutes = minutes + 1;
	// 		secondes = 0;
	// 	}
	// 	afficher(minutes, secondes);
	// }

	var timeoutID;
	// var intervalID = setInterval(getCurrentTime, 100); // ms

	// function getCurrentTime() {
		
 //    	var currentTime = player.getCurrentTime();
 //    	if (currentTime > 58.828685) {
 //            $(".input").show();
 //            $(".timer").show();
 //            $(".btn").show();
 //            $(".video").hide();
 //        }
 //    }

	function compteARebours() {
		var now = Date.now();
		console.log(start_date);
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
			
			/* clignotement rouge noir avant la mise en place de la vidéo */
			// timeoutID = window.setInterval(function(){
				// effaceCouleur();
				// if (interrupteur) {
				// 	noir();
				// } else {
				// 	rouge();
				// }

				// interrupteur = !interrupteur;
			// });
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
	var start_date = Date.now();
	console.log(start_date);
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
			clearInterval(timeoutID);
			// clearInterval(intervalID);
			noir();
			secondes = 0;
			minutes = 5;
			dixiemeSeconde = 0;

			syncroCpteRebours();
			afficher(minutes, secondes, dixiemeSeconde);
			reset = true;
			on = false;
			// $('body').removeClass('bg-red');
			// $('.play').removeClass('bg-red');
			// $('.reinitialiser').removeClass('bg-red');
			// $('.timer').removeClass('bg-red');
		}

	}
	
	// function effaceCouleur() {
	// 	$('body').removeClass('bg-black');
	// 	$('.play').removeClass('bg-black');
	// 	$('.reinitialiser').removeClass('bg-black');
	// 	$('.timer').removeClass('bg-black');

	// 	$('body').removeClass('bg-red');
	// 	$('.play').removeClass('bg-red');
	// 	$('.reinitialiser').removeClass('bg-red');
	// 	$('.timer').removeClass('bg-red');
	// }

	function noir() {
		$('body').addClass('bg-black');
		$('.play').addClass('bg-black');
		$('.reinitialiser').addClass('bg-black');
		$('.timer').addClass('bg-black');
	}

	// function rouge() {
	// 	$('body').addClass('bg-red');
	// 	$('.play').addClass('bg-red');
	// 	$('.reinitialiser').addClass('bg-red');
	// 	$('.timer').addClass('bg-red');
	// }

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
	//		duration = ( 60 * minutes * 1000
			afficher(minutes, secondes, dixiemeSeconde);
	}

});
