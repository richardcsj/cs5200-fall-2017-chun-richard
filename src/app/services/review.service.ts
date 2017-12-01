import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class ReviewService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  createReview(propertyId:string, customerId:string, review:any){
  	review.customer = customerId;
  	review.property = propertyId;
  	return this._http.post(this.baseUrl + '/api/review',{review:review})
  	 .map(
  	 	(res:Response) => {
  	 		const data = res.json();
  	 		return data;
  	 	}
  	 	);
  }

  findReviewsForProperty(propertyId:string){
  	return this._http.get(this.baseUrl + '/api/review/property/'+propertyId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findAllReviews(){
  	return this._http.get(this.baseUrl + '/api/review')
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }
  findReviewById(reviewId:string){
  	return this._http.get(this.baseUrl + '/api/review/'+reviewId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  updateReview(reviewId:string,review:any){
  	return this._http.put(this.baseUrl + '/api/review/'+reviewId,{review:review})
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  deleteReview(reviewId:string){
  	return this._http.delete(this.baseUrl + '/api/review/'+reviewId)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

}
