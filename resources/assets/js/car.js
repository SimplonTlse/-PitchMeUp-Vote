'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let moment = require('moment');
let $ = require('jquery');

let CountdownTimer = React.createClass({
	duration: 50,
	getInitialState: function() {
		return {
			dixiemeSeconde: 0,
			startMoment: moment(),
			startDuration: moment.duration(this.duration*60)
		};
	},
	tic: function() {

		
	},
	majAffichage: function() {
		let now = moment();
		let diff = now.diff(this.state.startMoment);		
		let remaining = moment.duration(this.state.startDuration).subtract(diff);
		
		let time = {
			minutes: remaining.minutes(),
			secondes: remaining.seconds(),
			dixiemeSeconde: parseInt(remaining.milliseconds()/100, 10)
		};
		this.setState(time);
		/* TODO :
			si remaining<0 -> clearInterval
			et clignotement (faire class css et faire clignoter)
		*/
		if(remaining < 0){
			clearInterval(this.interval);
		}
		

	},
	componentDidMount: function() {
		this.interval = setInterval(this.majAffichage, 100);
	},
	componentWillMount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		const {minutes, secondes, dixiemeSeconde} = this.state;
		return (
			<div>
				<div>{minutes} : {secondes} . {dixiemeSeconde}</div>
				<div className="boutons">
            		<Bouton className="play" color="green" icon="play_arrow" text="Démarrer" trigger={this.majAffichage} />
            		<Bouton className="init" color="black" icon="replay" text="Réinitialiser" trigger={this.componentWillMount} />
           			<Bouton className="settings" color="black" icon="settings" text="Paramètres" trigger={this.settings} />
        		</div>
        	</div>
 		);
	}
});

let Bouton = React.createClass({
	render: function() {
		return (	
			<button className={"waves-effect waves-light btn " + this.props.className + " " + this.props.color} onClick={this.props.trigger} >
            <i className="material-icons left">{this.props.icon}</i>{this.props.text}</button>
        );
    }
});


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

