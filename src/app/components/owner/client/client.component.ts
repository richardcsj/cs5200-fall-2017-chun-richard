import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {PropertyService} from "../../../services/property.service";
import {SharedService} from "../../../services/shared.service";
import {Location} from '@angular/common';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
ownerId:string;
  clients:any;
  client:any;
  owner:any;
  constructor(private userService: UserService, private propertyService: PropertyService, private activatedRoute: ActivatedRoute,
  	private router: Router,private _location: Location,private sharedService:SharedService,private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( "My clients" );
  	this.owner = this.sharedService.user;
    this.ownerId = this.owner._id;
    this.activatedRoute.params
    	.subscribe(
    			(params:any)=>{
    				if(params['clientId']){
    					this.userService.findUserById(params['clientId'])
    						.subscribe(
    								(user:any)=>{
    									this.contact(user);
    								}
    							)
    				}
    			}
    		)
	  				this.propertyService.findPropertiesByOwner(this.ownerId)
	  					.subscribe(
	  						(properties:any)=>{
	  							this.clients = [];
	  							for(let i = 0 ; i< properties.length;i++){
	  								if(!properties[i].available){
	  									let client = properties[i].customer;
	  									client.property = properties[i];
	  								    this.clients.push(client);
	  								}
	  							}
	  						}
	  						);
  	}
  contact(client:any){
  	this.client = client;
  }
  back(){
  	this._location.back();
  }

}
