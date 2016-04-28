'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AuthConstants = require('../constants/AuthConstants.js');

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var CHANGE_EVENT = 'change';

//private variable
var _loginData = {
  memberId : null,
  token : null,
  loginStatus : false
};
//console.log(localStorage);


var AuthStore = function(){};
util.inherits(AuthStore, EventEmitter);

AuthStore.prototype.emitChange = function () {
  this.emit(CHANGE_EVENT);
};

AuthStore.prototype.addChangeListener = function (cb) {
  return this.on(CHANGE_EVENT, cb);
};

AuthStore.prototype.removeChangeListener = function (listener) {
  return this.removeListener(CHANGE_EVENT, listener);
};

AuthStore.prototype.getStatus = function () {
  if (localStorage.loginStatus != null) {
    return localStorage;
  }
  return  _loginData;
};

var authStore = new AuthStore();

// Register callback to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action) {
    case AuthConstants.AUTH_LOGINED:
      console.info("LOGIN");
      _loginData.memberId = payload.loginData.memberId;
      _loginData.token = payload.loginData.token;
      localStorage.setItem("loginStatus", true);
      localStorage.setItem("token", _loginData.token);
      authStore.emitChange();
      window.location.href= "/";
      break;

    case AuthConstants.AUTH_LOGED_OUT:
      console.info('LOGOUT');
      _loginData.memberId = null;
      _loginData.token = null;
      _loginData.loginStatus = false;
  		localStorage.removeItem('loginStatus');
      localStorage.removeItem('token');
      authStore.emitChange();
      window.location.href= "/";
      break;

    default:
      return true;
  }
});

module.exports = authStore;
