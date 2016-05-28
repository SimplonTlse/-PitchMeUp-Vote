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

// let Input = React.createClass({
// 	render: function() {
// 		return (
// 			<input className="input" type="number" id="time-change" />
// 		);
// 	}
// });

let Timer = React.createClass({
	render: function() {
		return (
			<div className="timer">05 : 00 . 0</div>
		);
	}	
});

let PlayInit = React.createClass({
	render: function() {
		return (
			<div className="boutons">
            	<Boutons className="play" color="green" icon="play_arrow" text="Démarrer" />
            	<Boutons className="init" color="black" icon="replay" text="Réinitialiser" />
            	<Boutons className="settings" color="black" icon="settings" text="Paramètres" />
        	</div>
        );
	}
});

let Boutons = React.createClass({
	onClick: function() {
		alert("salut");
	},
	render: function() {
		return (
			<button className={"waves-effect waves-light btn " + this.props.className + " " + this.props.color} onClick={this.onClick} >
            <i className="material-icons left">{this.props.icon}</i>{this.props.text}</button>
		);
	}
});

let WrapperCar = React.createClass({
	render: function() {
		return (
			<div>
				<Video />
				<Timer />
				<PlayInit />
			</div>
		);
	}
});

module.exports = WrapperCar;