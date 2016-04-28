'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Radium = require('radium');
var Router = require('react-router-component');
var GridActions = require('../actions/GridActions');
var GridStore = require('../stores/GridStore');
var PathConstants = require('../constants/PathConstants');
var HexConstants = require('../constants/HexConstants');
var $ = require('jquery');

var Hexagon = React.createClass({
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  _onChange: function(){

  },
  render: function(){
    var styles = {
      height : HexConstants.HexHeight,
      width : HexConstants.HexWidth
    }

    var imgStyle = {
      width : HexConstants.HexWidth
    }

    var random = (function(){
      var cursor = Math.floor(Math.random()*100)%3;
      var text;
      switch (cursor) {
        case 0:
          text = 'fadeOne';
          break;
        case 1:
          text = 'fadeTwo';
          break;
        case 2:
          text = 'fadeThree';
          break;
        default:
          text ='';
      }
      return text;
    })();

    var url = this.props.data.IMAGE;
    return (
      <div className={'hex fadeIn fade-in ' + random } style={styles}>
          <a className="hexIn" href="#">
              <img style={imgStyle} src={url} alt="" />
              <h1>{this.props.data.NAME}</h1>
              <p>{this.props.data.DIRECTOR}</p>
          </a>
      </div>
    );
  }
});


module.exports = Radium(Hexagon);
