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
