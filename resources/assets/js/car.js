'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let moment = require('moment');
let $ = require('jquery');

let CountdownTimer = React.createClass({
	getInitialState: function() {
		console.log(moment());
		return {
			// minutes: 0,
			// seconds: 10,
			dixiemeSeconde: 0,
			startMoment: moment(),
			startDuration: moment.duration(5000*60)
		};
	},
	tic: function() {

		let now = moment();
		let diff = now.diff(this.state.startMoment);
		//console.log(diff);
		
		let duration = moment.duration(this.state.startDuration).subtract(diff);
		
		//console.log(this.state.startDuration);

		//console.log(duration.minutes(),duration.seconds());
		let min = duration.minutes();
		console.log(min);
	},
	tac: function() {
		this.setState({dixiemeSeconde: this.state.dixiemeSeconde - 1});
		if (this.state.dixiemeSeconde < 1) {
			this.state.dixiemeSeconde = 10;
		}		

	},
	componentDidMount: function() {
		this.setState({dixiemeSeconde: this.state.dixiemeSeconde});
		this.interval = setInterval(this.tic, 1000);
		this.intervall = setInterval(this.tac, 100);
	},
	componentWillMount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div>{this.state.min} : {this.state.duration} . {this.state.dixiemeSeconde}</div>
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

