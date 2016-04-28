'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var CHANGE_EVENT = 'change';

//private variable
var _PostData = [];
var _loadInfo = {};


var GridStore = function(){};
util.inherits(GridStore, EventEmitter);

GridStore.prototype.emitChange = function () {
  this.emit(CHANGE_EVENT);
};

GridStore.prototype.addChangeListener = function (cb) {
  return this.on(CHANGE_EVENT, cb);
};

GridStore.prototype.removeChangeListener = function (listener) {
  return this.removeListener(CHANGE_EVENT, listener);
};

GridStore.prototype.getPosts = function () {
  return _PostData;
};

GridStore.prototype.getLoadInfo = function () {
  return _loadInfo;
};


var gridStore = new GridStore();

// Register callback to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action) {
    case 'getPosts':
      _PostData = JSON.parse(payload.posts);
      gridStore.emitChange();
      break;

    case 'loadPost':
      var count = payload.info.count;
      var currentLimit = payload.info.currentLimit;
      _loadInfo = {
        count : count,
        currentLimit : currentLimit
      }
      gridStore.emitChange();
      break;

    default:
      return true;
  }
});

module.exports = gridStore;
