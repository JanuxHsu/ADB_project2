'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Radium = require('radium');
var Router = require('react-router-component');
var GridActions = require('../actions/GridActions');
var GridStore = require('../stores/GridStore');
var PathConstants = require('../constants/PathConstants');
var HexConstants = require('../constants/HexConstants');
var HexagonRow = require('./Hex-row');
var $ = require('jquery');


Object.defineProperty(Array.prototype, 'chunk_inefficient', {
  value: function(chunkSize) {
      var array=this;
      return [].concat.apply([],
          array.map(function(elem,i) {
              return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
          })
      );
  }
});



var HexagonContainer = React.createClass({
  getInitialState: function() {
    return ({
      posts : []
    });
  },
  componentDidMount: function() {
    GridStore.addChangeListener(this._onChange);
    this.setState({
      posts : GridStore.getPosts()
    })
  },
  componentWillUnmount: function() {
    GridStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      posts : GridStore.getPosts()
    });
  },
  GridDistribution: function(posts){
    var chunk = (this.props.rowMax * 2)+1 || 0;
    var slicedData = posts.chunk_inefficient(chunk);
    return slicedData;
  },
  render: function(){
    var layout = this.GridDistribution(this.state.posts);
    var rowNum = this.props.rowMax || 0;
    var result = [];
    var counter = 0;

    layout.map(function(item, i){
      var splitInnerRow = item.chunk_inefficient(rowNum+1);
      splitInnerRow.map(function(item2, j){
        counter += 1;
        result.push(<HexagonRow data={item2} Max={rowNum} key={counter} />);
      });
    });

    var ctx = this;
      return (
        <div className='hex-container'>{result}</div>
      );
  }
});


module.exports = Radium(HexagonContainer);
