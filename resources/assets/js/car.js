'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');

let CountdownTimer = React.createClass({
	getInitialState: function() {
		return {
			minutes: 1,
			seconds: 10,
			dixiemeSeconde: 0
		};
	},
	tick: function() {
		this.setState({dixiemeSeconde: this.state.dixiemeSeconde - 1});

		if (this.state.dixiemeSeconde < 0) {
			this.state.dixiemeSeconde = 9;
			//this.state.seconds = this.state.seconds - 1;
		}		
			
		this.setState({seconds: this.state.seconds - 1});
		if (this.state.seconds <= 0) {
			this.state.seconds = 59;
			this.state.minutes = this.state.minutes - 1;
		}

		if (this.state.minutes === 0 && this.state.seconds === 0 && this.state.dixiemeSeconde === 0) {
			clearInterval(this.interval);
		}
	},
	componentDidMount: function() {
		this.setState({minutes: this.state.minutes});
		this.setState({seconds: this.state.seconds});
		this.setState({dixiemeSeconde: this.state.dixiemeSeconde});
		let interval = setInterval(this.tick, 1000);
	},
	componentWillMount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div>{this.state.minutes} : {this.state.seconds} : {this.state.dixiemeSeconde}</div>
			// <div className="boutons">
   //          	<Bouton className="play" color="green" icon="play_arrow" text="Démarrer" trigger={this.start} />
   //          	<Bouton className="init" color="black" icon="replay" text="Réinitialiser" trigger={this.componentWillMount} />
   //         	<Bouton className="settings" color="black" icon="settings" text="Paramètres" trigger={this.settings} />
   //      	</div>
 		);
	}
});

// let Bouton = React.createClass({
// 	render: function() {
// 		return (	
// 			<button className={"waves-effect waves-light btn " + this.props.className + " " + this.props.color} onClick={this.props.trigger} >
//             <i className="material-icons left">{this.props.icon}</i>{this.props.text}</button>
//         );
//     }
// });


let WrapperCar = React.createClass({
	render: function() {
		return (
			<div>
				<CountdownTimer />
			</div>
		);
	}
});

module.exports = WrapperCar;

