// presentational component: simply renders information
// container component: maintains state and renders children
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('todo-app');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

// when path is "about", renders about, if its just the index of the page, then renders weather
ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);