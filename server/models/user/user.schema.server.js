module.exports = function(app,mongoose){

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
		firstName: String,
		lastName: String,
		role: String,
		email: String,
		phone: String,
		dateCreated: Date,
		valid: Boolean,
		validatedBy : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		dob: Date

    });

    return UserSchema;

}