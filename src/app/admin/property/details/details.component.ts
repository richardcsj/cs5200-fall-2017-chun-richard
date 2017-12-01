import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {PropertyService} from "../../../../services/property.service";
import {SharedService} from "../../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

propertyId:string;
  adminId:string;
  property:any;
  admin:any;
  showLocationFlag:boolean;
  constructor(private userService: UserService, private propertyService: PropertyService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location,private sharedService:SharedService,
  	private titleService: Title) { }

  ngOnInit() {
  	this.titleService.setTitle( "Administration : Property Details" );
  	this.activatedRoute.params
	.subscribe(
		(params: any) => {
		this.propertyId = params['propertyId'];
		this.admin = this.sharedService.user;
    	this.adminId = this.admin._id;
		this.propertyService.findPropertyById(this.propertyId)
		  .subscribe(
		    (property:any)=>{
		      this.property = property;
		    },
		    (error:any)=>{
		      console.log(error);

		    }
		    );
		}
	);
  }
  deleteProperty(propertyId:string){
  	this.propertyService.deleteProperty(this.propertyId)
	  .subscribe(
	    (done:any)=>{
	      this.router.navigate(['..'],{relativeTo:this.activatedRoute});
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
