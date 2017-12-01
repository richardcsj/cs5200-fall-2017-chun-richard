module.exports=function(app,models){
  var propertyModel = models.propertyModel;
  api = {
    'createProperty': createProperty,
    'findAllProperties' : findAllProperties,
    'findAllPropertiesForOwner': findAllPropertiesForOwner,
    'findPropertyById': findPropertyById,
    'updateProperty': updateProperty,
    'deleteProperty': deleteProperty
  };

  app.post('/api/property/owner/:ownerId',api.createProperty);
  app.get('/api/property/owner/:ownerId',api.findAllPropertiesForOwner);
  app.get('/api/property',api.findAllProperties);
  app.get('/api/property/:propertyId',api.findPropertyById);
  app.put('/api/property/:propertyId',api.updateProperty);
  app.delete('/api/property/:propertyId',api.deleteProperty);

  function createProperty(req,res){
  	var property = req.body.property;
  	var ownerId = req.params.ownerId;
    property.owner = ownerId;
    propertyModel.createProperty(property)
      .then(
        function(result){
          res.send(result);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't create property");
        }
      );
  }

  function findAllProperties(req,res){
    propertyModel.findAllProperties()
      .then(
        function(properties){
          res.send(properties);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't find properties");
        }
      );
  }

  function findAllPropertiesForOwner(req,res){
  	var ownerId = req.params.ownerId;
  	propertyModel.findAllPropertiesForOwner(ownerId)
      .then(
        function(properties){
          res.send(properties);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't find properties");
        }
      );
  }

  function findPropertyById(req,res){
  	var propertyId = req.params.propertyId;
    propertyModel.findPropertyById(propertyId)
      .then(
        function(properties){
          res.send(properties);
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't find property for propertyId");
        }
      );
  }

  function updateProperty(req,res){
  	var propertyId = req.params.propertyId;
  	var property = req.body.property;
    propertyModel.updateProperty(propertyId,property)
      .then(
        function(property){
          res.send(property);
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't update property for propertyId");
        }
      );
  }

  function deleteProperty(req,res){
  	var propertyId = req.params.propertyId;
    propertyModel.deleteProperty(propertyId)
      .then(
        function(properties){
          res.send({deleted:true});
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't delete property for propertyId");
        }
      );
  }

	
}