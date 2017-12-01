import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SharedService} from "../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
customerId:string;
customer:any;
	type:string;
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private userService:UserService,
    private _location: Location,private sharedService:SharedService,private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( "Search for property" );
  	this.customer = this.sharedService.user;
    this.customerId = this.customer._id;
  }

  searchByType() {
  	this.router.navigate(['../type',this.type],{relativeTo:this.activatedRoute});
  }
  back(){
    this._location.back();
  }
 

}
