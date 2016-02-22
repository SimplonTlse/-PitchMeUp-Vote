"use strict"
$(document).ready(function(){

	var app = {
		classes : {
			overlay : 'cache',
			boutons : 'btn',
			bg : {
				red : 'bg-red',
				green : 'bg-green',
				orange : 'bg-orange',
			}
		},
		nodes : {
			overlay : null,
			bg:null
		},
		init:function(){ // method
			this.nodes.overlay = $(cl(this.classes.overlay));
			this.nodes.overlay.hide();
			this.watchers();
			this.reset();
		},
		watchers:function(){ // method
			var self = this;
			$(cl(self.classes.boutons)).on('click', function(event){
				event.preventDefault();
				self.reset();
				self.nodes.overlay.show();
				var id = ($(this).attr('id'));
				self.nodes.overlay.addClass(id);
				
			});

			self.nodes.overlay.click(function(){
				self.nodes.overlay.hide();
			});
		},
		reset:function(){ // method
			for (var prop in this.classes.bg) {
				var selector = this.classes.bg[prop];
				$(cl(selector)).removeClass(selector);
			}
		},
	}

	app.init();

});


function cl(name){
	return '.' + name;
}
function att(name){
	return '[' + name + ']';
}