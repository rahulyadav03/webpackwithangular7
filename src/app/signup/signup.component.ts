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

import {LoginService} from "../login/login.service";
import '../../style.css';

@Component({
	selector: "signup-app",	
    styleUrls: [String(require("./signup.component.css"))],
    template: require("./signup.component.html"),
})

export class SignupComponent implements OnInit {
	model: any = {};
	myform: FormGroup;
	first_name: FormControl;
	last_name: FormControl;
	user_email: FormControl;
	user_phone: FormControl;
	user_password: FormControl;
	verify_password: FormControl;

	constructor(private router: Router, private loginService: LoginService) { }

	ngOnInit() {
	    this.createFormControls();
	    this.createForm();
	}

	createFormControls() {
	    this.first_name = new FormControl('', Validators.required);
	    this.last_name = new FormControl('', Validators.required);
	    this.user_email = new FormControl('', Validators.required);
	    this.user_phone = new FormControl('', Validators.required);
	    this.user_password = new FormControl('', Validators.required);
	    this.verify_password = new FormControl('', Validators.required);
	}

	createForm() {
	    this.myform = new FormGroup({
	    	first_name: this.first_name,
	    	last_name: this.last_name,
	    	user_email: this.user_email,
	    	user_phone: this.user_phone,
	    	user_password: this.user_password,
	    	verify_password: this.verify_password
	    });
	}

	signup() {

		if (this.myform.valid) {
			if(this.model.password != this.model.verifyPassword){
				Swal.fire('Error', 'password and verify password should be same.','error')
				return;
			}

		    let self = this;
			this.loginService.setLoginCredentials(this.model).then(function(data){
				if(data){
					Swal.fire({
					  position: 'center',
					  type: 'success',
					  title: 'You have been signup sucessfully',
					  showConfirmButton: false,
					  timer: 1500
					})
					self.router.navigate(['login']);
				}
			});
		}
	}

	fnResetUserForm() {
		this.myform.reset();
	}
}