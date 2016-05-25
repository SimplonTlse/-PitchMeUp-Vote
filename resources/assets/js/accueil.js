'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');

let VoteCar = React.createClass({
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
			// <div className="bouton">
			// 	<button className="waves-effect waves-light btn vote">
   //              <i className="material-icons left">offline_pin</i>Vote</button>
   //          </div>
			// <div className="bouton">
			// 	<button className="waves-effect waves-light btn car">
   //              <i className="material-icons left">alarm_on</i>Compte à rebours</button>
   //          </div>
		);
	}
});




let Boutons = React.createClass({
	onClick: function() {
		this.props.trigger(this.props.value);
	},
	render: function() {
		return (
            <button className={"waves-effect waves-light btn vote " + this.props.color} /*onClick={this.onClick}*/ >
            <i className="material-icons right">{this.props.icon}</i>{this.props.text}</button>
        );
	}
});

let WrapperAccueil = React.createClass({
	render: function() {
        return (
            <div>
                <VoteCar />
                <CompteARebours />
            </div>
        );
    }
});

module.exports = WrapperAccueil;

