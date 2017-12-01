import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {ReviewService} from "../../../services/review.service";
import {SharedService} from "../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
customerId:string;
  properties:any;
  property:any;
  users:any;
  customer:any;
  errorFlag : boolean;
  errorMsg :string;
  messageFlag:boolean;
  message : string;
  type:string;
  showLocationFlag:boolean;
  //review
  rate:number;
  review:string;
  Arr = Array;
  Math:any;
  constructor(private userService: UserService,private propertyService: PropertyService,private reviewService: ReviewService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location,private sharedService:SharedService,private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( "List of Properties" );
    this.Math = Math;
  	this.customer = this.sharedService.user;
    this.customerId = this.customer._id;
    this.activatedRoute.params
      .subscribe(
          (params:any)=>{
            this.type = params['type'];
            this.propertyService.findAllProperties()
              .subscribe(
                (properties:any)=>{
                  this.properties = [];
                         for(let i = 0;i<properties.length;i++){
                             if(this.type && properties[i].type==this.type){
                              this.properties.push(properties[i]);   
                             }else if(this.type == undefined){
                              this.properties.push(properties[i]);
                             }
                          }
                },
                (error:any)=>{
                  console.log(error);
                }
                );
          }
        );
	  

  }
  details(property:any){
  	this.property = property;
    this.property.avg = 0;
  	this.reviewService.findReviewsForProperty(property._id)
  		.subscribe(
  			(reviews:any)=>{
  				this.property.reviews = reviews;
          let rate = 0;
          for(let i = 0;i<this.property.reviews.length;i++){
            if(this.property.reviews[i].rate)
              rate+=this.property.reviews[i].rate;
          }
          if(this.property.reviews.length>0)
            rate = rate/this.property.reviews.length;
          this.property.avg = rate;
  			}
  		)
  }
  rent(property:any){
  	property.customer = this.customerId;
  	property.available = false;
  	this.propertyService.updateProperty(property._id,property)
  		.subscribe(
  			(res:any) => {           
            this.messageFlag = true;
            this.message = 'You rented property with ID '+property._id;

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot rent property';

          }
  			)

  }
  back(){
    this._location.back();
  }
  addReview(propertyId:string){
    let review = {rate:this.rate,text:this.review};
    this.reviewService.createReview(propertyId,this.customerId,review)
      .subscribe(
        (review:any)=>{
            this.messageFlag = true;
            this.message = 'Review added successfully';
            this.propertyService.findPropertyById(propertyId)
              .subscribe(
                  (property:any)=>{
                    this.details(property);
                  }
                )

          },
        (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot add review';
        });
  }
  

}
