import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SharedService} from "../../../services/shared.service";
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {

  userId:string;
  user:any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
  	private router: Router,private sharedService:SharedService,private titleService: Title ) { }


  ngOnInit() {
  	this.titleService.setTitle( "Customer Menu" );
    this.user = this.sharedService.user;
    this.userId = this.user._id;
  }

}
