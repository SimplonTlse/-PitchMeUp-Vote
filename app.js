"use strict"
$(document).ready(function(){

	$('.cache').hide();

	$('.btn').on('click', function(event){
		event.preventDefault();
		var id = ($(this).attr('id'));
		if (id == 'ok') {
			$('.cache').addClass('bg-green');
			$('.cache').removeClass('bg-orange');
			$('.cache').removeClass('bg-red');
			$('.cache').show();
		} else if (id == "pascompris") {
			$('.cache').addClass('bg-orange');
			$('.cache').removeClass('bg-green');
			$('.cache').removeClass('bg-red');
			$('.cache').show();
		} else if (id == "non") {
			$('.cache').addClass('bg-red');
			$('.cache').removeClass('bg-green');
			$('.cache').removeClass('bg-orange');
			$('.cache').show();
		}

	});

	$('.cache').click(function(){
		$('.cache').hide();
	});

});

