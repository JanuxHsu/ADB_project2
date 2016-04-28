'use strict';
var React = require('react');
var Radium = require('radium');
var Router = require('react-router-component');
var AuthStore = require('../stores/AuthStore');
var AuthActions = require('../actions/AuthActions');



var LoginPanel = React.createClass({
  mixins: [Router.NavigatableMixin],
  getInitialState: function() {
    return null;
  },
  componentDidMount: function() {
    //AuthStore.addChangeListener(this.authChange);
  },

  componentWillUnmount: function() {
    //AuthStore.removeChangeListener(this.authChange);
  },

  authChange: function() {

  },
  render: function(){
    return (
      <div className="loginMain">
      
      </div>
    );
  }
});

module.exports = Radium(LoginPanel);
