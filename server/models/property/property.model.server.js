module.exports = function(app,mongoose){

	var PropertySchema = require("./property.schema.server.js")(app,mongoose),
	PropertyModel = mongoose.model("Property", PropertySchema),
	api = {
		"createProperty":createProperty,
		"findAllProperties":findAllProperties,
		"findAllPropertiesForOwner":findAllPropertiesForOwner,
		"findPropertyById":findPropertyById,
		"updateProperty":updateProperty,
		"deleteProperty":deleteProperty
	}

	return api;

	function createProperty(property){
		property._id = mongoose.Types.ObjectId();
		property.dateCreated = new Date();
		property = new PropertyModel(property);
		return PropertyModel
			.create(property);		
	}

	function findAllProperties(){
		return PropertyModel
			.find()
			.populate('owner')
			.populate('customer')
			.populate('validatedBY');		
	}

	function findAllPropertiesForOwner(ownerId){
		return PropertyModel
			.find({owner:ownerId})
			.populate('owner')
			.populate('customer')
			.populate('validatedBY');;
	}

	function findPropertyById(propertyId){
		return PropertyModel
			.findById(propertyId)
			.populate('owner')
			.populate('customer')
			.populate('validatedBY');;
	}
	
	function updateProperty(propertyId,property){
		return PropertyModel
			.findOneAndUpdate({_id:propertyId},property);
	}

	function deleteProperty(propertyId){
		return PropertyModel
			.remove({_id:propertyId});
	}

	


}