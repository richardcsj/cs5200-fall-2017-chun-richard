module.exports = function(app,mongoose){

    var ReviewSchema = mongoose.Schema({
        text:String,
        rate:Number,
        property:{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
        customer:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		dateCreated: Date

    });

    return ReviewSchema;

}