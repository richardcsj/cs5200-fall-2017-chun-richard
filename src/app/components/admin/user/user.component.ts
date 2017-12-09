import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SharedService} from "../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


adminId:string;
  users:any;
  admin:any;
  errorFlag : boolean;
  errorMsg :string;
  messageFlag:boolean;
  message : string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location,private sharedService:SharedService,private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( "Administration : Users" );
    this.admin = this.sharedService.user;
    this.adminId = this.admin._id;
  	if(!this.admin.valid || this.admin.role!='admin'){
  	  this.router.navigate(['profile/menu']);
  	}
  	this.userService.findAllUsers()
  		.subscribe(
  			(users:any)=>{
  				this.users = users;
  			},
  			(error:any)=>{
  				console.log(error);
  			}
  			);
  }
  details(userId:string){
  	this.router.navigate([userId],{relativeTo:this.activatedRoute});
  }
  activate(user:any){
  	user.valid = true;
  	user.validatedBy = this.admin._id;
  	this.userService.updateUser(user._id,user)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = user.username+'\'s account is validated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot validate user';

          }
        );
	    
  }
  deactivate(user:any){
  	user.valid = false;
  	this.userService.updateUser(user._id,user)
        .subscribe(
          (res:any) => {           
            this.messageFlag = true;
            this.message = user.username+'\'s account is deactivated';

          },
          (error:any) => {
            this.errorFlag = true;
            this.errorMsg = 'cannot deactivate user';

          }
        );
	    
  }
  back(){
    this._location.back();
  }
}
