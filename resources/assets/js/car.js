'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');

// let on = false;
// let reset = false;
// let player;
// let timerID;
// let timeoutID;

// let start_date = null;

// let CompteARebours = React.createClass({
// 	getInitialState: function(){
// 		return {
// 			minutes: 5,
// 			secondes: 0,
// 			dixiemeSeconde: 0
// 		};
// 	},
// 	afficher: function(minutes, secondes, dixiemeSeconde){
		
// 	},
// 	stop: function(){

// 	},
// 	synchroCpteRebours: function(){
		
// 	},
// 	render: function(){
// 		return (
// 			<div className="timer">05 : 00 . 0</div>
//         );
// 	}

// });

// let Video = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="video">
// 				<div className="player"></div>
// 			</div>
// 		);
// 	}
// });

// let PlayInit = React.createClass({
// 	getInitialState: function() {
// 		return (
// 			<div className="timer">05 : 00 . 0</div>
// 		);
// 	},
// 	start: function(){
// 		// if (on === false) {
// 		// 	start_date = Date.now();
// 		//  timerID = setInterval(this.props.cptearebours, 100);
// 		// 	on = true;
// 		// 	reset = false;
// 		// }
// 		alert("coucou");
// 	},
// 	reset: function(){
// 		// console.log(reset);
// 		// if (reset === false) {
// 		// 	clearInterval(timerID);
// 		// 	clearInterval(timeoutID);
// 		// 	this.props.noir;
// 		// 	secondes = 0;
// 		// 	minutes = 5;
// 		// 	dixiemeSeconde = 0;
// 		this.getInitialState;
// 		// 	reset = true;
// 		// 	on = false;
// 		// }
// 	},
// 	settings: function() {

// 	},
// 	render: function() {
// 		return (	
// 			<div className="boutons">
//             	<Boutons className="play" color="green" icon="play_arrow" text="Démarrer" trigger={this.start} />
//             	<Boutons className="init" color="black" icon="replay" text="Réinitialiser" trigger={this.reset} />
//            		<Boutons className="settings" color="black" icon="settings" text="Paramètres" trigger={this.settings} />
//         	</div>
//         );
// 	}
// });

// let Boutons = React.createClass({
// 	onClick: function() {

// 	},
// 	render: function() {
// 		return (
// 			<button className={"waves-effect waves-light btn " + this.props.className + " " + this.props.color} onClick={this.props.trigger} >
//             <i className="material-icons left">{this.props.icon}</i>{this.props.text}</button>
// 		);
// 	}
// });

// let WrapperCar = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<Video />
// 				<CompteARebours />
// 				<PlayInit />
// 			</div>
// 		);
// 	}
// });

// module.exports = WrapperCar;

let Chrono = React.createClass({

  getInitialState: function() {
    return {
      minutes: null,
      secondes: null,
      dixiemeSeconde: null
    };
  },
  start: function(){
    if (this.state.minutes) {
      // prevent multi clicks on start
      return;
    }
    this.setState({
      minutes: new Date(),
      dixiemeSeconde: requestAnimationFrame(this.tick)      
    });
  },

  settings: function(){

  },

  reset: function(){
    cancelAnimationFrame(this.state.dixiemeSeconde);
    this.setState(this.getInitialState());
  },

  tick: function(){
    this.setState({
      secondes: new Date(new Date() - this.state.minutes),
      dixiemeSeconde: requestAnimationFrame(this.tick)
    });
  },

  addZero: function(n){
    return n < 10 ? '0' + n : n;
  },

  render: function(){

    let secondes = this.state.secondes;
    let hundredths = secondes ? Math.round(this.state.secondes.getMilliseconds()/10) : 0;
    let seconds = secondes ? this.state.secondes.getSeconds() : 0;
    let minutes = secondes ? this.state.secondes.getMinutes() : 5;

    if (hundredths === 100) hundredths = 0;

    return (
      <section className="Chrono">
        <h1>{this.addZero(minutes)}:{this.addZero(seconds)}.{this.addZero(hundredths)}</h1>
        <div className="buttons">
          <button className={"waves-effect waves-light btn green"} onClick={this.start}>Démarrer</button>
          <button className={"waves-effect waves-light btn black"} onClick={this.reset}>Réinitialiser</button>
          <button className={"waves-effect waves-light btn black"} onClick={this.settings}>Paramètres</button>
        </div>
      </section>
    )
  }

});


let WrapperCar = React.createClass({
	render: function() {
		return (
			<div>
				<Chrono />
			</div>
		);
	}
});

module.exports = WrapperCar;