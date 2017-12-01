import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {ReviewService} from "../../../services/review.service";
import {SharedService} from "../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class OwnerReviewComponent implements OnInit {

  ownerId:string;
  reviews:any;
  owner:any;
  constructor(private userService: UserService,private reviewService: ReviewService,private propertyService: PropertyService,
  	 private activatedRoute: ActivatedRoute, private router: Router,private _location: Location,private sharedService:SharedService,
  	 private titleService: Title ) { }

  ngOnInit() {
  	this.titleService.setTitle( "My reviews" );
  	this.owner = this.sharedService.user;
    this.ownerId = this.owner._id;
		this.reviewService.findAllReviews()
			.subscribe(
				(reviews:any)=>{
					this.reviews = [];
					this.propertyService.findPropertiesByOwner(this.ownerId)
						.subscribe(
								(properties:any)=>{
									for(let i=0;i<reviews.length;i++){
										for(let j=0;j<properties.length;j++){
											if(reviews[i].property._id==properties[j]._id){
												this.reviews.push(reviews[i]);
											}
										}
									}
								}
							)
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
