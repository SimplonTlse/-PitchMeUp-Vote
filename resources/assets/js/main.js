'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

//fonction pour redirect sur page vote
var Vote = React.createClass({
	 getInitialState: function(){
	 	return {query: ''}
	 },
	 queryChange: function(evenement){
	 	this.setState({query: evenement.target.value});
	 },
	 lien: function(){
	 	return this.state.query+'/vote.html';
	 },
    render: function() {
        return (
            <div className="bouton">
                <a href={this.lien()} id="vote" className="waves-effect waves-light btn grey pif">
                <i className="material-icons right">offline_pin</i>Votez</a>
            </div>
        );
    }
});

//fonction pour redirect sur page compte a rebourss
var CompteARebours = React.createClass({
	getInitialState: function(){
	 	return {query: ''}
	 },
	 queryChange: function(evenement){
	 	this.setState({query: evenement.target.value});
	 },

	 lien: function(){
	 	return this.state.query+'/car.html';
	 },
    render: function() {
        return (
            <div className="bouton">
                <a href={this.lien()} id="car" className="waves-effect waves-light btn grey pif">
                <i className="material-icons right">alarm_on</i>Compte à rebours</a>
            </div>
        );
    }
});

//affichage complet
var Wrapper = React.createClass({
	render: function() {
        return (
            <div>
                <Vote />
                <CompteARebours />
            </div>
        );
    }
});

ReactDOM.render(
    <Wrapper />, 
    document.getElementById('btns')
);