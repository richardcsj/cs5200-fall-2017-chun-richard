module.exports = function(app,mongoose){

  var AttachmentSchema = require("./attachment.schema.server.js")(app,mongoose),
  AttachmentModel = mongoose.model("Attachment", AttachmentSchema),
  api = {
    "createAttachment":createAttachment,
    "findAllAttachments":findAllAttachments,
    "findAllAttachmentsForProperty":findAllAttachmentsForProperty,
    "findAttachmentById":findAttachmentById,
    "updateAttachment":updateAttachment,
    "deleteAttachment":deleteAttachment
  }

  return api;

  function createAttachment(attachment){
    attachment._id = mongoose.Types.ObjectId();
    attachment.dateCreated = new Date();
    attachment = new AttachmentModel(attachment);
    return AttachmentModel
      .create(attachment);    
  }

  function findAllAttachments(){
    return AttachmentModel
      .find()
      .populate('property');   
  }

  function findAllAttachmentsForProperty(propertyId){
    return AttachmentModel
      .find({property:propertyId})
      .populate('property');
  }

  function findAttachmentById(attachmentId){
    return AttachmentModel
      .findById(attachmentId)
      .populate('property');
  }
  
  function updateAttachment(attachmentId,attachment){
    return AttachmentModel
      .findOneAndUpdate({_id:attachmentId},attachment);
  }

  function deleteAttachment(attachmentId){
    return AttachmentModel
      .remove({_id:attachmentId});
  }

  


}