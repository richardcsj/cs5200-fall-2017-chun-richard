module.exports=function(app,models){
  var attachmentModel = models.attachmentModel;
	api = {
    'createAttachment': createAttachment,
    'findAllAttachments' : findAllAttachments,
    'findAllAttachmentsForProperty': findAllAttachmentsForProperty,
    'findAttachmentById': findAttachmentById,
    'updateAttachment': updateAttachment,
    'deleteAttachment': deleteAttachment
  };

  app.post('/api/attachment',api.createAttachment);
  app.get('/api/attachment/property/:propertyId',api.findAllAttachmentsForProperty);
  app.get('/api/attachment',api.findAllAttachments);
  app.get('/api/attachment/:attachmentId',api.findAttachmentById);
  app.put('/api/attachment/:attachmentId',api.updateAttachment);
  app.delete('/api/attachment/:attachmentId',api.deleteAttachment);

  function createAttachment(req,res){
  	var attachment = req.body.attachment;
		attachmentModel.createAttachment(attachment)
      .then(
        function(result){
          res.send(result);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't create attachment");
        }
      );
  }

  function findAllAttachments(req,res){
    attachmentModel.findAllAttachments()
      .then(
        function(attachments){
          res.send(attachments);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't find attachments");
        }
      );
  }

  function findAllAttachmentsForProperty(req,res){
  	var propertyId = req.params.propertyId;
  	attachmentModel.findAllAttachmentsForProperty(propertyId)
      .then(
        function(attachments){
          res.send(attachments);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't find attachments");
        }
      );   
  }

  function findAttachmentById(req,res){
  	var attachmentId = req.params.attachmentId;
    attachmentModel.findAttachmentById(attachmentId)
      .then(
        function(attachment){
          res.send(attachment);
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't find attachment for attachmentId");
        }
      );
  }

  function updateAttachment(req,res){
  	var attachmentId = req.params.attachmentId;
  	var attachment = req.body.attachment;
    attachmentModel.updateAttachment(attachmentId,attachment)
      .then(
        function(attachment){
          res.send(attachment);
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't update attachment for attachmentId");
        }
      );
  }

  function deleteAttachment(req,res){
  	var attachmentId = req.params.attachmentId;
    attachmentModel.deleteAttachment(attachmentId)
      .then(
        function(res){
          res.send({deleted:true});
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't delete attachment for attachmentId");
        }
      );
  }


}