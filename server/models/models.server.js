module.exports = function(app){

	var connectionString = 'mongodb://127.0.0.1:27017/db'; // for local
	if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
	  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
	  var password = process.env.MLAB_PASSWORD_WEBDEV;
	  connectionString = 'mongodb://' + username + ':' + password;
	  connectionString += '@ds127034.mlab.com:27034/heroku_dq317zvh'; // use yours
	}


  	var mongoose = require("mongoose");
  	mongoose.connect(connectionString, {
    	useMongoClient: true
  	});
  	mongoose.Promise = require('bluebird');
  	var userModel = require('./user/user.model.server.js')(app,mongoose);
    var propertyModel = require('./property/property.model.server.js')(app,mongoose);
    var reviewModel = require('./review/review.model.server.js')(app,mongoose);
    var attachmentModel = require('./attachment/attachment.model.server.js')(app,mongoose);
  	return {
  		userModel:userModel,
      propertyModel:propertyModel,
      reviewModel:reviewModel,
      attachmentModel:attachmentModel
  	 }
}