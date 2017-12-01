module.exports = function(app,mongoose){

  var ReviewSchema = require("./review.schema.server.js")(app,mongoose),
  ReviewModel = mongoose.model("Review", ReviewSchema),
  api = {
    "createReview":createReview,
    "findAllReviews":findAllReviews,
    "findAllReviewsForProperty":findAllReviewsForProperty,
    "findReviewById":findReviewById,
    "updateReview":updateReview,
    "deleteReview":deleteReview
  }

  return api;

  function createReview(review){
    review._id = mongoose.Types.ObjectId();
    review.dateCreated = new Date();
    review = new ReviewModel(review);
    return ReviewModel
      .create(review);    
  }

  function findAllReviews(){
    return ReviewModel
      .find()
      .populate('property')
      .populate('customer');   
  }

  function findAllReviewsForProperty(propertyId){
    return ReviewModel
      .find({property:propertyId})
      .populate('property')
      .populate('customer');
  }

  function findReviewById(reviewId){
    return ReviewModel
      .findById(reviewId)
      .populate('property')
      .populate('customer');
  }
  
  function updateReview(reviewId,review){
    return ReviewModel
      .findOneAndUpdate({_id:reviewId},review);
  }

  function deleteReview(reviewId){
    return ReviewModel
      .remove({_id:reviewId});
  }

  


}