'use strict'
let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');

//fonction pour redirect sur page vote
let Vote = React.createClass({
	getInitialState: function(){
	 	return {currentVote: null};
	},
    aVote: function(idVote){
        if (typeof idVote === "object"){
            idVote = null;
        }
        this.setState({currentVote: idVote});
    },
    render: function() {
        return (
            <div className="cartons">
                <div className="cartons-inner">
                    <Bouton icon="thumb_up" text="C'est clair" color="green" trigger={this.aVote} value="1" current={this.state.currentVote} />
                    <Bouton icon="thumbs_up_down" text="Je n'ai pas tout compris" color="orange" trigger={this.aVote} value="2" current={this.state.currentVote} />
                    <Bouton icon="thumb_down" text="Ce n'est pas clair" color="red" trigger={this.aVote} value="3" current={this.state.currentVote} /> 
                </div>
                <div className="btn_retour">
                    <button className="waves-effect waves-light btn grey" id="retour" onClick={this.aVote}>
                    <i className="material-icons left">fast_rewind</i>Retour</button>
                </div>
            </div>
        );
    }
});

let Bouton = React.createClass({
    onClick: function(){
        this.props.trigger(this.props.value);
    },
    render: function(){
        const visible = (!this.props.current || this.props.value === this.props.current) && "block" || "none";
        console.log(visible);
        return (
            <button style={{display: visible}} className={"waves-effect waves-light btn carton " + this.props.color} onClick={this.onClick} >
            <i className="material-icons right">{this.props.icon}</i>{this.props.text}</button>
        );
    }
});

//affichage complet
let Wrapper = React.createClass({
	render: function() {
        return (
            <div>
                <Vote />
            </div>
        );
    }
});

module.exports = Wrapper;