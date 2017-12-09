import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {SharedService} from "../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
adminId:string;
  properties:any;
  users:any;
  admin:any;
  errorFlag : boolean;
  errorMsg :string;
  messageFlag:boolean;
  message : string;
  constructor(private userService: UserService,private propertyService: PropertyService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location,private sharedService:SharedService,private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( "Administration : Properties" );
    this.admin = this.sharedService.user;
    this.adminId = this.admin._id;
    if(!this.admin.valid || this.admin.role!='admin'){
		    this.router.navigate(['profile/menu']);
		  }
		this.propertyService.findAllProperties()
			.subscribe(
				(properties:any)=>{
					this.properties = properties;
				},
				(error:any)=>{
					console.log(error);
				}
				);
		
}

  details(propertyId:string){
  	this.router.navigate([propertyId],{relativeTo:this.activatedRoute});
  }
  activate(property:any){
  	property.valid = true;
  	property.validatedBy = this.admin._id;
  	this.propertyService.updateProperty(property._id,property)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = 'property is validated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot validate property';

          }
        );
	    
  }
  deactivate(property:any){
  	property.valid = false;
    property.validatedBy = null;
  	this.propertyService.updateProperty(property._id,property)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = 'property is deactivated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot deactivate property';

          }
        );    
  }
  back(){
    this._location.back();
  }

}
