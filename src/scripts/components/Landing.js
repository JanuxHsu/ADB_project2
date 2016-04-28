'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Radium = require('radium');
var Router = require('react-router-component');
var GridActions = require('../actions/GridActions');
var GridStore = require('../stores/GridStore');
var PathConstants = require('../constants/PathConstants');
var HexConstants = require('../constants/HexConstants');
var HexagonContainer = require('./Hex-container');
var $ = require('jquery');

var Landing = React.createClass({
  mixins: [Router.NavigatableMixin],
  getInitialState: function() {
    return ({
      posts : []
    });
  },
  gridResize: function(){
    var temp = Math.floor($('.hex-container').width() / HexConstants.HexWidth) - 1;
    return temp;
  },
  componentDidMount: function() {
    GridStore.addChangeListener(this._onChange);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleLoad);

    GridActions.getPosts(0, (this.gridResize()*8)+4);
    this.setState({
      rowMax : this.gridResize(),
      currentLimit : (this.gridResize()*8)+4
    });
  },
  componentWillUnmount: function() {
    GridStore.removeChangeListener(this._onChange);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleLoad);
  },
  _onChange: function(){

  },
  handleResize: function(e) {
    GridActions.getPosts(0, (this.gridResize()*8)+4);
    this.setState({
      windowWidth: window.innerWidth,
      rowMax : this.gridResize(),
      currentLimit : (this.gridResize()*8)+4
    });
  },
  handleLoad: function(){
    var ctx = this;
    if($(window).scrollTop() > ($(document).height() - $(window).height())*0.3) {
      $('.toolbar').show();
    } else {
      $('.toolbar').hide();
    }
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      var add = (this.gridResize()*2)+1;
      var current = this.state.currentLimit;
      var newLimit = add + current;
      GridActions.getPosts(0, newLimit);
      ctx.setState({
        currentLimit : newLimit
      });
    }
  },
  scrollToTop : function() {
    return function() {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
    };
  },
  render: function(){
    var ctx = this;

    var top = {
      height : $('.hex-container').width()/4
    };

    var logo = {
      fontSize: $('.hex-container').width()/5
    };

    return (
      <div>
        <div className='hex-top fade-in' style={top}>
          <p style={logo}>WATCHMEN</p>
        </div>
        <HexagonContainer rowMax={ctx.state.rowMax} />
        <div className='hex-bottom'>
          <div className='toolbar'>
            <div className="hexagon" onClick={this.scrollToTop()}>
              <span className='glyphicon glyphicon-arrow-up'></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Radium(Landing);
