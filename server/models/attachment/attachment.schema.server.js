module.exports = function(app,mongoose){

    var AttachmentSchema = mongoose.Schema({
        type:String,
        title:String,
        url:String,
        property:{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
		dateCreated: Date

    });

    return AttachmentSchema;

}