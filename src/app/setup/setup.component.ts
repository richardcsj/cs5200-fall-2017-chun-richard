import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../services/user.service";
import {Routes, RouterModule,ActivatedRoute,Router} from "@angular/router";
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
@ViewChild('f') registerForm: NgForm;
  //properties
  username: string;
  password: string;
  pwdconfirmation: string;
  registerAs:string="admin";
  errorFlag: boolean;
  errorMsg = 'Invalid username!';
  constructor(private userService: UserService,private route: ActivatedRoute,
            private router: Router,private titleService: Title) { }

  ngOnInit() {
  	this.titleService.setTitle( "Setup" );
  	this.userService.findAllUsers()
  		.subscribe(
  				(users:any)=>{
  					for(let i=0;i<users.length;i++){
  						if(users[i].role=="admin"){
  							this.router.navigate(['/login']);
  						}
  					}
  				}
  			);
  }
  setup() {
      //hide error msg if already there
      this.errorFlag = false;
      // fetching data from registerForm
      this.username = this.registerForm.value.username;
      this.password = this.registerForm.value.password;
      this.pwdconfirmation = this.registerForm.value.pwdconfirmation;
      this.registerAs = this.registerForm.value.registerAs; 

      if(this.username == ''|| this.password == '' || this.pwdconfirmation == '' || this.registerAs  == ''){
        this.errorFlag = true;
        this.errorMsg = 'all fields are mandatory';

      }else{
          if(this.password == this.pwdconfirmation){
              this.userService.register(this.username, this.password,this.registerAs,true)
                 .subscribe(
                   (data: any) => {
                     this.router.navigate(['/profile']);
                   },
                   (error: any) => {
                     this.errorMsg = error._body;
                   }
                );

            }else{
              this.errorFlag = true;
              this.errorMsg = "password and password confirmation are not the same";
            }
        
      }
    }
    cancel(){
      this.router.navigate(['/login']);
    }

}
