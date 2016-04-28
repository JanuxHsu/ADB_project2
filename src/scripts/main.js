require('bootstrap-webpack');
require('../assets/stylesheets/style.css');
require('../assets/stylesheets/loginPanel.css');
require('../assets/stylesheets/landing.css');
require('../assets/stylesheets/categoryPage.css');
require('../../node_modules/react-selectize/themes/index.css');
require('../assets/stylesheets/postPage.css');
// TODO: Require assets here.
// require('../assets/images/product.png');

var App = require('./components/App.js');
var React = require('react');
var ReactDom = require('react-dom');

ReactDom.render(<App />, document.getElementById('main'));
