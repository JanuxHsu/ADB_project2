var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var PathConstants = require('../constants/PathConstants.js');
var $ = require('jquery');

var GridActions = {
	getPosts: function(skip, limit){
		$.ajax({
			url : PathConstants.baseUrl + '/movies/?skip='+ skip +'&limit=' + limit,
			method : 'get',
			success : function(data) {
				AppDispatcher.handleViewAction('getPosts', {
					posts : data,
				});
			},
			error : function(err) {
				console.error(err);
			}
		});
	},
	loadedPost: function(count, currentLimit){
		AppDispatcher.handleViewAction('loadPost', {
			info : {
				count : count,
				currentLimit : currentLimit
			}
		});
	}
};

module.exports = GridActions;
