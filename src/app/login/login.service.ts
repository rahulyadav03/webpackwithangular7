import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
	signupData: any = {};

	setLoginCredentials(data: object) {
		this.signupData = data;
	    return Promise.resolve(true); 
	}

	getLoginCredentials() {
		return Promise.resolve(this.signupData);
	}
}