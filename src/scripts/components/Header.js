'use strict';
var React = require('react');
var Radium = require('radium');
var Router = require('react-router-component');
var AuthStore = require('../stores/AuthStore');
var AuthActions = require('../actions/AuthActions');

var Header = React.createClass({
  mixins: [Router.NavigatableMixin],
  getInitialState : function() {
    return null;
  },
  render: function() {
    return(
      <div id='topBar'>
        <p>Login</p>
      </div>
    );
  }
});



module.exports = Radium(Header);
