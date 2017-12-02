import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../../services/user.service";
import {SharedService} from "../../../../services/shared.service";
import {Location} from '@angular/common';
import {Routes, RouterModule,ActivatedRoute,Router} from "@angular/router";
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewUserComponent implements OnInit {
@ViewChild('f') newForm: NgForm;
  //properties
  user:any;
  username: string;
  password: string;
  registerAs:string;
  errorFlag: boolean;
  errorMsg = 'Invalid username!';
  messageFlag:boolean;
  message : string;
  adminId:string;
  admin:any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
  	private router: Router, private _location: Location,private sharedService:SharedService,private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( "Administration : New User" );
    this.admin = this.sharedService.user;
    this.adminId = this.admin._id;
  	if(!this.admin.valid || this.admin.role!='admin'){
  	  this.router.navigate(['profile/menu']);
  	}
  }
  register() {
      //hide error msg if already there
      this.errorFlag = false;
      // fetching data from registerForm
      this.username = this.newForm.value.username;
      this.password = this.newForm.value.password;
      this.registerAs = this.newForm.value.registerAs; 

      if(this.username == ''|| this.password == ''  || this.registerAs  == ''){
        this.errorFlag = true;
        this.errorMsg = 'all fields are mandatory';

      }else{
      			this.user = {};
      			this.user.username = this.username;
      			this.user.password = this.password;
      			this.user.role = this.registerAs;

              this.userService.createUser(this.user)
                 .subscribe(
                   (data: any) => {
                     this.router.navigate(['..',data._id,'edit'],{relativeTo:this.activatedRoute});
                   },
                   (error: any) => {
                     this.errorMsg = error._body;
                   }
                );
        
      }
    }
    back(){
    this._location.back();
  }

}
