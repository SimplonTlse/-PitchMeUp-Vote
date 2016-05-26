'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');
let Redirect = require('react-redirect');

let VoteCar = React.createClass({
	getInitialState: function() {
		return {query: null}
	},
	lien: function(idBtn) {
		// console.log(idBtn);
		// if (idBtn == "1"){
		// 	//alert("je suis le vote");
  //  			<Redirect location='/vote.html' />
		// } else if(idBtn == "2"){
		// 	return this.state.query + '/car.html';
		// }
		// this.setState({query: idBtn});
	},
	render: function(){
		return (
			<div className="bouton">
                <Boutons className="vote" icon="offline_pin" text="Vote" trigger={this.lien} value="1" current={this.state.query} />
                <Boutons className="car" icon="alarm_on" text="Compte à rebours" trigger={this.lien} value="2" current={this.state.query} />
            </div>
		);
	}
});

let Boutons = React.createClass({
	onClick: function() {
		this.props.trigger(this.props.value);
	},
	render: function() {
		return (
            <button className={"waves-effect waves-light btn " + this.props.className} onClick={this.onClick} >
            <i className="material-icons left">{this.props.icon}</i>{this.props.text}</button>
        );
	}
});

let WrapperAccueil = React.createClass({
	render: function() {
        return (
            <div>
                <VoteCar />
            </div>
        );
    }
});

module.exports = WrapperAccueil;

