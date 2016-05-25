'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');

let Vote = React.createClass({
	getInitialState: function() {
		return {query: ''}
	},
	queryChange: function(evenement) {
		this.setState({query: evenement.target.value});
	},
	lien: function() {
		return this.state.query + '/vote.html';
	},
	render: function(){
		return (
			<div className="bouton">
				<a href={this.lien()} className="waves-effect waves-light btn vote">
                <i className="material-icons left">offline_pin</i>Vote</a>
            </div>
		);
	}
});

let CompteARebours = React.createClass({
	getInitialState: function() {
		return {query: ''}
	},
	queryChange: function(evenement) {
		this.setState({query: evenement.target.value});
	},
	lien: function() {
		return this.state.query + '/car.html';
	},
	render: function(){
		return (
			<div className="bouton">
				<a href={this.lien()} className="waves-effect waves-light btn car">
                <i className="material-icons left">alarm_on</i>Compte à rebours</a>
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

