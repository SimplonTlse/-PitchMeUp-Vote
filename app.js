"use strict"
$(document).ready(function(){

	$('.cache').hide();

	$('.btn').on('click', function(event){
		event.preventDefault();
		resetCacheColor();
		$('.cache').show();
		var id = ($(this).attr('id'));
		if (id == 'ok') {
			$('.cache').addClass('bg-green');
		} else if (id == "pascompris") {
			$('.cache').addClass('bg-orange');
		} else if (id == "non") {
			$('.cache').addClass('bg-red');
		}

	});

	function resetCacheColor(){
		$('.cache').removeClass('bg-red');
		$('.cache').removeClass('bg-green');
		$('.cache').removeClass('bg-orange');
	}

	$('.cache').click(function(){
		$('.cache').hide();
	});

});

