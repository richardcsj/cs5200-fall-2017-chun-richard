import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {SharedService} from "../../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId:string;
  adminId:string;
  user:any;
  admin:any;
  messageFlag:boolean;
  message : string;
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
              console.log(this.user);
    		    },
    		    (error:any)=>{
    		      console.log(error);

    		    }
    		    );
    		}
    	);
	
  }
  deleteUser(userId:string){
  	this.userService.deleteUser(this.userId)
	  .subscribe(
	    (done:any)=>{
	      this.router.navigate(['..'],{relativeTo:this.activatedRoute});
	    },
	    (error:any)=>{
	      console.log(error);

	    }
	    );

  }
  makeAdmin(){
  	this.user.role='admin';
  	this.userService.updateUser(this.user._id,this.user)
  		.subscribe(
  			(updated:any)=>{
  				this.messageFlag = true;
            	this.message = this.user.username+' is made an Admin';
  			},
  			(error:any)=>{

  			}
  			)

  }
  back(){
    this._location.back();
  }

}
