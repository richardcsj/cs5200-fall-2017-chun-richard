import { Component, OnInit } from '@angular/core';
import  {UserService} from '../../services/user.service';
import {ActivatedRoute,Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userId:string;
	user:any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
  	private router : Router,private sharedService:SharedService) { }

  ngOnInit() {
  	this.user = this.sharedService.user;
  	this.userId = this.user._id;
    if(!this.user.valid){
      this.router.navigate(['profile']);
    }
	
  }

}
