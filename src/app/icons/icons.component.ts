import {Component, OnInit} from "@angular/core";
import '../../style.css';

import {UserService} from "../userlist/userService/user.service";

@Component({
    selector: "icons-app",	
    styleUrls: [String(require("./icons.component.scss"))],
    template: require("./icons.component.html"),
})
export class IconsComponent implements OnInit {

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