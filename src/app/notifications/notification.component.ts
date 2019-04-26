import {Component, OnInit} from "@angular/core";
import '../../style.css';

import {UserService} from "../userlist/userService/user.service";

@Component({
    selector: "notification-app",	
    styleUrls: [String(require("./notification.component.scss"))],
    template: require("./notification.component.html"),
})
export class NotificationComponent implements OnInit{
	
	constructor(private userService: UserService) { }

	ngOnInit() {
		if(this.userService.getSidebarToggle()){
	  		document.getElementById("mySidebar").style.width = "0";
	  		document.getElementById("main").style.marginLeft = "0";
	  	}else{
	  		document.getElementById("mySidebar").style.width = "250px";
	  		document.getElementById("main").style.marginLeft = "250px";
	  	}
	}

}	