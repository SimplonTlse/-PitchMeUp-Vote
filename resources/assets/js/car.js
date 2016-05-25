'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');

let Vote = React.createClass({
	render: function(){
		return (
			<div className="bouton">
				<button className="waves-effect waves-light btn vote">
                <i className="material-icons left">offline_pin</i>Vote</button>
            </div>
		);
	}
});

let CompteARebours = React.createClass({
	render: function(){
		return (
			<div className="bouton">
				<button className="waves-effect waves-light btn car">
                <i className="material-icons left">alarm_on</i>Compte à rebours</button>
            </div>
		);
	}
});

let WrapperCar = React.createClass({
	render: function() {
        return (
            <div>
                <Vote />
                <CompteARebours />
            </div>
        );
    }
});

module.exports = WrapperCar;

