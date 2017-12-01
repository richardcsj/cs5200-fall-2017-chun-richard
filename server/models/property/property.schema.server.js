module.exports = function(app,mongoose){

    var PropertySchema = mongoose.Schema({
        type:String,
        description:String,
        size:Number,
        latitude:Number,
        longitude:Number,
        available: Boolean,
        price: Number,
        owner : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        customer : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		validatedBy : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		dateCreated: Date,
		valid: Boolean
    });

    return PropertySchema;

}