import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Router} from "@angular/router";

import '../../style.css';

import {UserService} from "../userlist/userService/user.service";

@Component({
	selector: "childTesting-app",	
    styleUrls: [String(require("./childTesting.component.css"))],
    template: require("./childTesting.component.html"),
})

export class ChildTestingComponent implements OnInit{
	
	counter: number = 0;
	@Input() PData: number; 

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

	@Output() valueChange = new EventEmitter();
	@Output() childEvent = new EventEmitter();
	
	valueChanged() { 
		this.counter = this.counter + 1; 
		this.valueChange.emit(this.counter); 
	} 

	onChange(value: any) {
	    this.childEvent.emit(value);
	}
}