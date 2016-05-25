'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');

let Video = React.createClass({
	render: function() {
		return (
			<div className="video">
				<div className="player"></div>
			</div>
		);
	}
});

let Input = React.createClass({
	render: function() {
		return (
			<input className="input" type="number" id="time-change" />
		);
	}
});

let Timer = React.createClass({
	render: function() {
		return (
			<div className="timer">05 : 00 . 0</div>
		);
	}	
});

let Boutons = React.createClass({
	render: function() {
		return (
			<div className="btns_car">
				<div className="btn_play">
					<button className="waves-effect waves-light btn black play">
	                <i className="material-icons left">play_arrow</i>Démarrer</button>
	            </div>
	            <div className="btn_init">
					<button className="waves-effect waves-light btn black init">
	                <i className="material-icons left">replay</i>Réinitialiser</button>
	            </div>
	        </div>
		);
	}
});

let WrapperCar = React.createClass({
	render: function() {
		return (
			<div>
				<Video />
				<Input />
				<Timer />
				<Boutons />
			</div>
		);
	}
});

module.exports = WrapperCar;