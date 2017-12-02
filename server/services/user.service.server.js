module.exports= function(app,models){
	var userModel = models.userModel;
	var passport = require('passport');
	var LocalStrategy = require('passport-local').Strategy;
	var bcrypt = require("bcrypt-nodejs");

	passport.use(new LocalStrategy(localStrategy));

    api = {
    'createUser': createUser,
    'findAllUsers':findAllUsers,
    'findUser': findUser,
    'findUserById':findUserById,
    'updateUser': updateUser,
    'deleteUser': deleteUser,
    'login': login,
    'logout' : logout,
    'register':register,
    'loggedin':loggedin
  };

	app.post('/api/user',api.createUser);
	app.get('/api/users',api.findAllUsers);
	app.get('/api/user',api.findUser);
	app.get('/api/user/:userId',api.findUserById);
	app.put('/api/user/:userId',api.updateUser);
	app.delete('/api/user/:userId',api.deleteUser);
	app.post('/api/login', passport.authenticate('local'), api.login);
	app.post('/api/logout', api.logout);
	app.post ('/api/register', api.register);
	app.post ('/api/loggedIn', api.loggedin);

	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);
	

	function serializeUser(user, done) {
	    	done(null, user);
		}

	function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
	}

	function localStrategy(username, password, done) {

    userModel
        .findUserByUsername(username)
        .then(
            function(user) {
                if(user && bcrypt.compareSync(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            },
            function(err) {
                if (err) { return done(err); }
            }
        );
	}

	function login(req, res) {
	    var user = req.user;
	    res.json(user);
	}

	function logout(req, res) {
	    req.logOut();
	    res.sendStatus(200);
	}

	function register (req, res) {
	    var user = req.body;
	    user.password = bcrypt.hashSync(user.password);
	    userModel
	        .createUser(user)
	        .then(
	            function(user){
	                if(user){
	                    req.login(user, function(err) {
	                        if(err) {
	                            res.status(400).send(err);
	                        } else {
	                            res.json(user);
	                        }
	                    });
	                }
	            }
	        );
	}

	function loggedin(req, res) {
	    res.send(req.isAuthenticated() ? req.user : '0');
	}

	function createUser(req,res){
		var user = req.body.user;
		user.password = bcrypt.hashSync(user.password);
		userModel.createUser(user)
			.then(
				function(result){
					res.send(result);
				},
				function(error){
					console.log(error);
					res.status(500).send("Couldn't create user");
				}
			);
	}

	function findAllUsers(req,res){
		userModel.findAllUsers()
			.then(
					function(users){
						res.send(users);
					},
					function(error){
						res.status(404).send('can\'t find users');
					}
				)
	}
	
	function findUser(req,res){
		var username = req.query.username;
		var password = req.query.password;
		if(password==undefined){
			userModel.findUserByUsername(username)
				.then(
					function(user){
						res.send(user);
					},
					function(error){
						res.status(404).send('User Not found');
					}
				)
		}else{
			userModel.findUserByCredentials(username,password)
				.then(
					function(user){
						res.send(user);
					},
					function(error){
						res.status(404).send('User Not found');
					}
				)
		}
	}

  	function findUserById(req,res) {
  		var userId = req.params.userId;
  		userModel.findUserById(userId)
	  		.then(
					function(user){
						res.send(user);
					},
					function(error){
						console.log(error);
						res.status(404).send('Not found');
					}
				);
		
	    
  	}

  	function updateUser(req,res){
  		var userId = req.params.userId;
  		var user = req.body.user;
  		userModel.updateUser(userId,user)
  			.then(
  					function(user){
  						res.send(user);
  					},
  					function(error){
  						console.log(error);
  						res.status(404).send("couldn't find user for userId");
  					}
  				); 		
  	}

  	function deleteUser(req,res){
  		var userId = req.params.userId;
  		userModel.deleteUser(userId)
  			.then(
  					function(result){
  						res.send({deleted:true});
  					},
  					function(error){
  						console.log(error);
  						res.status(404).send("Couldn't find user for userId");
  					}
  				);		
  	}

}