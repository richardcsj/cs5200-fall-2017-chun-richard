module.exports=function(app,models){
  var reviewModel = models.reviewModel;
	api = {
    'createReview': createReview,
    'findAllReviews' : findAllReviews,
    'findAllReviewsForProperty': findAllReviewsForProperty,
    'findReviewById': findReviewById,
    'updateReview': updateReview,
    'deleteReview': deleteReview
  };

  app.post('/api/review',api.createReview);
  app.get('/api/review/property/:propertyId',api.findAllReviewsForProperty);
  app.get('/api/review',api.findAllReviews);
  app.get('/api/review/:reviewId',api.findReviewById);
  app.put('/api/review/:reviewId',api.updateReview);
  app.delete('/api/review/:reviewId',api.deleteReview);

  function createReview(req,res){
  	var review = req.body.review;
		reviewModel.createReview(review)
      .then(
        function(result){
          res.send(result);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't create review");
        }
      );
  }

  function findAllReviews(req,res){
    reviewModel.findAllReviews()
      .then(
        function(reviews){
          res.send(reviews);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't find reviews");
        }
      );
  }

  function findAllReviewsForProperty(req,res){
  	var propertyId = req.params.propertyId;
  	reviewModel.findAllReviewsForProperty(propertyId)
      .then(
        function(reviews){
          res.send(reviews);
        },
        function(error){
          console.log(error);
          res.status(500).send("Couldn't find reviews");
        }
      );   
  }

  function findReviewById(req,res){
  	var reviewId = req.params.reviewId;
    reviewModel.findReviewById(reviewId)
      .then(
        function(review){
          res.send(review);
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't find review for reviewId");
        }
      );
  }

  function updateReview(req,res){
  	var reviewId = req.params.reviewId;
  	var review = req.body.review;
    reviewModel.updateReview(reviewId,review)
      .then(
        function(review){
          res.send(review);
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't update review for reviewId");
        }
      );
  }

  function deleteReview(req,res){
  	var reviewId = req.params.reviewId;
    reviewModel.deleteReview(reviewId)
      .then(
        function(result){
          res.send({deleted:true});
        },
        function(error){
          console.log(error);
          res.status(404).send("Couldn't delete review for reviewId");
        }
      );
  }


}