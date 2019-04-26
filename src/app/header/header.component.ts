import {Component, OnInit} from '@angular/core'
import {Router} from "@angular/router";

import {UserService} from "../userlist/userService/user.service";

declare var $: any;

@Component({
	selector: "header-app",	
    styleUrls: [String(require("./header.component.css"))],
    template: require("./header.component.html"),
})
export class HeaderComponent implements OnInit {
	
	openSideBar: boolean = true;

	constructor(private router: Router, private userService: UserService) { }

	ngOnInit() {
	    
	  }

	fnGoToLoginPage() {
		this.router.navigate(['login']);
	}

	fnGoToSignupPage() {
		this.router.navigate(['signup']);
	}

	openNav() {
		this.openSideBar = !this.openSideBar;
		this.userService.setSidebarToggle(this.openSideBar);
	  	$(document).ready(function() {
		    document.getElementById("mySidebar").style.width = "250px";
	  		document.getElementById("main").style.marginLeft = "250px";
		});
	}

	closeNav() {
		this.openSideBar = !this.openSideBar;
		this.userService.setSidebarToggle(this.openSideBar);
	  	$(document).ready(function() {
		    document.getElementById("mySidebar").style.width = "0";
  			document.getElementById("main").style.marginLeft= "0";	
		});
	}
}