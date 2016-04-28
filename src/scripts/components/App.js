var React = require('react');
var Router = require('react-router-component');

var Header = require('./Header');
var Footer = require('./Footer');
var Landing = require('./Landing');
var LoginPanel = require('./LoginPanel');


var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;


var App = React.createClass({
  render: function(){
    return (
      <div className='content'>
        <Header handler={Header} />
      	<Locations hash>
  		    <Location path="/" handler={Landing} />
          <Location path="/login" handler={LoginPanel} />
          <NotFound handler={Landing} />
        </Locations>
        <Footer />
      </div>
    );
  }
});

module.exports = App;
