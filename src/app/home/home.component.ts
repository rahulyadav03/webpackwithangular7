import {Component, OnInit} from "@angular/core";
import '../../style.css';
import { DataService } from '../data.service';
import {UserService} from "../userlist/userService/user.service";


@Component({
    selector: "home-app",	
    styleUrls: [String(require("./home.component.scss"))],
    template: require("./home.component.html"),
})
export class HomeComponent implements OnInit {
		
	users: Object;

	constructor(private data: DataService, private userService: UserService) { }

	ngOnInit() {
		if(this.userService.getSidebarToggle()){
	  		document.getElementById("mySidebar").style.width = "0";
	  		document.getElementById("main").style.marginLeft = "0";
	  	}else{
	  		document.getElementById("mySidebar").style.width = "250px";
	  		document.getElementById("main").style.marginLeft = "250px";
	  	}

	    this.data.getUsers().subscribe(data => {
	        this.users = data
	        console.log(this.users);
	      }
	    );
	  }
}
