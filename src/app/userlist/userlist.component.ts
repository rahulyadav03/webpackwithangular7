import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import '../../style.css';
import { UserService } from './userService/user.service';

@Component({
    selector: "userlist-app",	
    styleUrls: [String(require("./userlist.component.scss"))],
    template: require("./userlist.component.html"),
})
export class UserlistComponent implements OnInit {
	
	users: any = [];

	constructor(private router: Router, private userservice: UserService) { }

	public ngOnInit() {
		if(this.userservice.getSidebarToggle()){
	  		document.getElementById("mySidebar").style.width = "0";
	  		document.getElementById("main").style.marginLeft = "0";
	  	}else{
	  		document.getElementById("mySidebar").style.width = "250px";
	  		document.getElementById("main").style.marginLeft = "250px";
	  	}
		this.users = this.userservice.getUserData(); 
	}

	fnGoToAddUser() {
		this.router.navigate(['userprofile']);
	}
}
