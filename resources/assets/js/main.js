let Wrapper = require('./vote.js');
let React = require('react');
let ReactDOM = require('react-dom');
let nodeVote = document.querySelector("[x-react-vote]");

if (nodeVote) {
    ReactDOM.render(
        <Wrapper />, 
        nodeVote
    );
};

let WrapperAccueil = require('./accueil.js');
let nodeAccueil = document.querySelector("[x-react-accueil]");

if (nodeAccueil) {
    ReactDOM.render(
        <WrapperAccueil />,
        nodeAccueil
    );
};

let WrapperCar = require('./car.js');
let nodeCar = document.querySelector("[x-react-car]");

if (nodeCar) {
    ReactDOM.render(
        <WrapperCar />,
        nodeCar
    );
};