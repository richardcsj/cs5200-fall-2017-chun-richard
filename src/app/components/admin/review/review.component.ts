import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ReviewService} from "../../../services/review.service";
import {SharedService} from "../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

adminId:string;
  reviews:any;
  admin:any;
  constructor(private userService: UserService,private reviewService: ReviewService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location,private sharedService:SharedService,private titleService: Title ) { }

  ngOnInit() {
  	this.titleService.setTitle( "Administration : Reviews" );
  	this.admin = this.sharedService.user;
    this.adminId = this.admin._id;
	if(!this.admin.valid || this.admin.role!='admin'){
	  	this.router.navigate(['profile/menu']);
	  }
    this.loadReviews();
  }
  remove(reviewId:string){
  	this.reviewService.deleteReview(reviewId)
	  .subscribe(
	    (done:any)=>{
	      this.loadReviews();
	    },
	    (error:any)=>{
	      console.log(error);

	    }
	    );

  }
  loadReviews(){
  	this.reviewService.findAllReviews()
			.subscribe(
				(reviews:any)=>{
					this.reviews = reviews;
				},
				(error:any)=>{
					console.log(error);
				}
				);
  }
  back(){
    this._location.back();
  }

}
