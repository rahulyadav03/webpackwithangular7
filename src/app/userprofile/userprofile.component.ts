import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import '../../style.css';
import { UserService } from '../userlist/userService/user.service';
declare var $: any;

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: "userprofile-app",	
    styleUrls: [String(require("./userprofile.component.scss"))],
    template: require("./userprofile.component.html"),
})
export class UserprofileComponent implements OnInit {
	
	model: any = {};

	constructor(private router: Router, private users: UserService) { }

	public ngOnInit() {
		if(this.users.getSidebarToggle()){
	  		document.getElementById("mySidebar").style.width = "0";
	  		document.getElementById("main").style.marginLeft = "0";
	  	}else{
	  		document.getElementById("mySidebar").style.width = "250px";
	  		document.getElementById("main").style.marginLeft = "250px";
	  	}
		/*$(document).ready(function() {
		    var readURL = function(input: any) {
		        if (input.files && input.files[0]) {
		            var reader = new FileReader();

		            reader.onload = function (e) {
		                $('.avatar').attr('src', e.target.result);
		            }

		            reader.readAsDataURL(input.files[0]);
		        }
		    }
		    

		    $(".file-upload").on('change', function(){
		        readURL(this);
		    });
		});*/
	}

	register() {
	    console.log(this.model);
	    let self = this;
	    this.users.setUserData(this.model).then(function(data: any){
	    	if(data){
	    		self.router.navigate(['userlist']);
	    	}
	    });
	}

	fnResetUserForm() {
		this.model = {};
		console.log(JSON.stringify(this.users.getUserData()));
	}
}
