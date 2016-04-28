var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AuthConstants = require('../constants/AuthConstants.js');
var PathConstants = require('../constants/PathConstants.js');
var $ = require('jquery');

var AuthActions = {
	login: function (account, password) {
    $.ajax({
      url : PathConstants.baseUrl + "api/auth/login",
      data : {
        account : account,
        password : password
      },
      method : "POST",
      success : function(data) {
				console.log(data);
        AppDispatcher.handleViewAction(AuthConstants.AUTH_LOGINED, {
          loginData: data,
        });
      },
      error : function(err) {
        console.error(err);
      }
    });
	},

	logout: function (token, memberId) {
		console.log(memberId);
    $.ajax({
      url: PathConstants.baseUrl + "api/auth/logout",
      headers: {
        "Authorization": token,
      },
			data:{
				memberId : memberId
			},
			method:'POST',
      success : function(data) {
				//console.log(data);
        AppDispatcher.handleViewAction(AuthConstants.AUTH_LOGED_OUT);
      },
      error : function(err) {
        console.error(err);
      }
    });
	}

};

module.exports = AuthActions;
