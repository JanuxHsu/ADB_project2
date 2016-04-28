var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action , payload){
    var payload = payload || {};
    this.dispatch(assign(payload, {
      source: 'VIEW_ACTION',
      action: action
    }));
  }
});

module.exports = AppDispatcher;
