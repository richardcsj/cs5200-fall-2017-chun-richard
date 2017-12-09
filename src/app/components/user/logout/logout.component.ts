import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
  	private router: Router ) { }

  ngOnInit() {
  	this.userService.logout()
     .subscribe(
       (data: any) => this.router.navigate(['/login'])
     );
  }

}
