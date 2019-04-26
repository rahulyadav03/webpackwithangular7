import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import Swal from 'sweetalert2';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

import '../../style.css';

import {LoginService} from "./login.service";

@Component({
	selector: "login-app",	
    styleUrls: [String(require("./login.component.css"))],
    template: require("./login.component.html"),
})

export class LoginComponent implements OnInit{
	model: any = {};
	myform: FormGroup;
	user_name: FormControl;
	user_password: FormControl;

	loginData: any = {};

	constructor(private router: Router, private loginService: LoginService) { }

	public ngOnInit() {
		this.createFormControls();
	    this.createForm();
	    let self = this;
		this.loginService.getLoginCredentials().then(function(response: any) {
			self.loginData = response;
		});
	}

	createFormControls() {
	    this.user_name = new FormControl('', Validators.required);
	    this.user_password = new FormControl('', Validators.required);
	}

	createForm() {
	    this.myform = new FormGroup({
	    	user_name: this.user_name,
	    	user_password: this.user_password
	    });
	}

	login() {

		if (this.myform.valid) {
			if(this.model.userName == this.loginData.userName && 
				this.model.password == this.loginData.password)
					this.router.navigate(['dashboard']);
			else
				Swal.fire('Error', 'Sorry, Password is incorrect.','error')
		}
	}

	fnForgotPassword() {
		let self = this;
		(async function getEmail () {
			const {value: email} = await Swal.fire({
			  title: 'Input email address',
			  input: 'email',
			  inputPlaceholder: 'Enter your email address'
			})

			if (email) {
				if(self.loginData.userName === email){
			  		Swal.fire('Your Password is: ' + self.loginData.password);
			  		self.model.password = self.loginData.password;
				}
			  	else
			  		Swal.fire('Sorry entered email does not exist in out system');
			}

			})()
	}

	fnGoToSignUp() {
		this.router.navigate(['signup']);
	}
}