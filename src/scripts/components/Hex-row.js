'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Radium = require('radium');
var Router = require('react-router-component');
var GridActions = require('../actions/GridActions');
var GridStore = require('../stores/GridStore');
var PathConstants = require('../constants/PathConstants');
var HexConstants = require('../constants/HexConstants');
var Hexagon = require('./Hexagon');
var $ = require('jquery');

var HexagonRow = React.createClass({
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  _onChange: function(){

  },
  render: function(){
    var max = this.props.Max;
    var styles = {
      height : HexConstants.rowHeight
    };
    var temp = [];
    this.props.data.map(function(item, i){
      temp.push(<Hexagon data={item} key={i} />);
    });


    return (<div className='hex-row' style={styles}>{ temp }</div>);


  }
});


module.exports = Radium(HexagonRow);
