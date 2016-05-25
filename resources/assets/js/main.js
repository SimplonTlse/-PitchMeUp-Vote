let Wrapper = require('./vote.js');
let React = require('react');
let ReactDOM = require('react-dom');
let node = document.querySelector("[x-react-vote]");

if (node) {
    ReactDOM.render(
        <Wrapper />, 
        node
    );
};

let WrapperAccueil = require('./accueil.js');
let node2 = document.querySelector("[x-react-accueil]");

if (node2) {
    ReactDOM.render(
        <WrapperAccueil />,
        node2
    );
};

let WrapperCar = require('./car.js');
let node3 = document.querySelector("[x-react-car]");