import {Component, OnInit} from "@angular/core";
import '../../style.css';

import {UserService} from "../userlist/userService/user.service";

@Component({
    selector: "typography-app",	
    styleUrls: [String(require("./typography.component.css"))],
    template: require("./typography.component.html"),
})
export class TypographyComponent implements OnInit{
	
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