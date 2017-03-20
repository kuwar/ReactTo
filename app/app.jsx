var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');

// Load foundation-sites
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<p>Boilerplate project</p>,
	document.getElementById('app')
);
