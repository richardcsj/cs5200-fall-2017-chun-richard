import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {ReviewService} from "../../../services/review.service";
import {SharedService} from "../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';
declare var google: any;

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {
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
  constructor(private userService: UserService,private propertyService: PropertyService,private reviewService: ReviewService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location,private sharedService:SharedService,private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( "My rentals" );
  	this.customer = this.sharedService.user;
    this.customerId = this.customer._id;
	this.loadMyRentals();

  }
  details(property:any){
  	this.property = property;
  	this.reviewService.findReviewsForProperty(property._id)
  		.subscribe(
  			(reviews:any)=>{
  				this.property.reviews = reviews;
  			}
  			);
      if(document.getElementById('map'))
        this.showLocation();
  }
  showLocation(){
    var uluru = {lat: this.property.latitude, lng: this.property.longitude};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  cancel(property:any){
  	if(this.property && property._id==this.property._id){
  		this.property = undefined;
  	}
  	property.customer = null;
  	property.available = true;
  	this.propertyService.updateProperty(property._id,property)
  		.subscribe(
  			(res:any) => {           
            this.messageFlag = true;
            this.message = 'You left property with ID '+property._id;


          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot leave property';

          }
  			);
  		this.loadMyRentals();

  }
  loadMyRentals(){
  	this.propertyService.findAllProperties()
			.subscribe(
				(properties:any)=>{
					this.properties = [];
					 for(let i = 0;i<properties.length;i++){
	                     if(properties[i].customer && properties[i].customer._id==this.customerId){
	                      this.properties.push(properties[i]);
	                     }
                    }
				},
				(error:any)=>{
					console.log(error);
				}
				);

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
