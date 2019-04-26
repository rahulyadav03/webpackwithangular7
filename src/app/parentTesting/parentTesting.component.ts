import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import '../../style.css';

import {UserService} from "../userlist/userService/user.service";

@Component({
	selector: "parentTesting-app",	
    styleUrls: [String(require("./parentTesting.component.css"))],
    template: require("./parentTesting.component.html"),
})

export class ParentTestingComponent implements OnInit{
	
	public CData: number;

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

	displayCounter(count: number) { 
		console.log(count); 
	}
}