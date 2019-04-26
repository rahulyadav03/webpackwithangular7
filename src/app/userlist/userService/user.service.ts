import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	userData: any = [];
	userSidebarToggleFlag: boolean = true;

	setUserData(data: object) {
		this.userData.push(data);
	    return Promise.resolve(true); 
	}

	getUserData() {
		return this.userData;
	}

	setSidebarToggle(data: boolean) {
		this.userSidebarToggleFlag = data;
	}

	getSidebarToggle() {
		return this.userSidebarToggleFlag;
	}
}