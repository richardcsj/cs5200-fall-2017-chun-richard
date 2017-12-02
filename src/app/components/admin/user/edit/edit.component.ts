import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {SharedService} from "../../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

userId:string;
  adminId:string;
  user:any;
  admin:any;
  username:string;
  email:string;
  valid:boolean;
  firstName:string;
  lastName:string;
  phone:string;
  dob:string;
  messageFlag:boolean;
  message : string;
  errorFlag : boolean;
  errorMsg :string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
  	private router: Router, private _location: Location,private sharedService:SharedService,private titleService: Title ) { }


  ngOnInit() {
  	this.titleService.setTitle( "Administration : User Details" );
  	this.admin = this.sharedService.user;
    this.adminId = this.admin._id;
  	if(!this.admin.valid || this.admin.role!='admin'){
  	  this.router.navigate(['profile/menu']);
  	}
  	this.activatedRoute.params
    	.subscribe(
    		(params: any) => {
    		this.userId = params['userId'];
    		this.userService.findUserById(this.userId)
    		  .subscribe(
    		    (user:any)=>{
    		      this.user = user;
			      this.username = this.user['username'];
			      this.email = this.user['email'];
			      this.firstName = this.user['firstName'];
			      this.lastName = this.user['lastName'];
			      this.valid = this.user['valid'];
			      this.phone = this.user['phone'];
			      if(this.user['dob']){
				      let fdate= this.user['dob'].split("-");
				      let day = fdate[2].split("T")[0];
				      let month = fdate[1];
				      let year = fdate[0];
				      let formattedDate = day+'/'+month+'/'+year;
				      this.dob = formattedDate;
			  		}
    		    },
    		    (error:any)=>{
    		      console.log(error);

    		    }
    		    );
    		}
    	);
  }
  update(){
    this.errorFlag = false;
    this.messageFlag = false;
    
      this.user['username'] = this.username;
      this.user['email'] = this.email;
      this.user['firstName'] = this.firstName;
      this.user['lastName'] = this.lastName;
	    this.user['phone'] = this.phone;
      this.user['dob'] = this.dob;  
      
      this.userService.updateUser(this.userId,this.user)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = 'informations are updated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot update informations';

          }
        );
  	}
  	 back(){
    this._location.back();
  }

}
