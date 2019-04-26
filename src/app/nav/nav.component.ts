import {Component, OnInit} from "@angular/core";
import '../../style.css';

declare var $: any;

declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}

/*{ path: '/icons', title: 'Icons', icon: 'pe-7s-science', class: ''},
	{ path: '/notifications', title: 'Notifications', icon: 'pe-7s-bell', class: ''}*/

export const ROUTES: RouteInfo[] = [
	{ path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: ''},
	{ path: '/userlist', title: 'Users', icon: 'pe-7s-user', class: ''},
	{ path: '/typography', title: 'Typography', icon: 'pe-7s-news-paper', class: ''},
	{ path: '/parentTesting', title: 'Parent Testing', icon: 'pe-7s-news-paper', class: ''}
];

@Component({
    selector: "app-nav",	
    styleUrls: [String(require("./nav.component.scss"))],
    template: require("./nav.component.html"),
})
export class NavComponent implements OnInit {
	appTitle: string = 'myapp';
	menuItems: any[];

	constructor() { }

	selectedNavBarName: string = 'dashboard';

	ngOnInit() {
		this.menuItems = ROUTES.filter(menuItem => menuItem);
	}

	fnSetActiveStyle(selectedName: string) {
	    this.selectedNavBarName = selectedName;
	}

	closeNav() {
	  	$(document).ready(function() {
		    document.getElementById("mySidebar").style.width = "0";
  			document.getElementById("main").style.marginLeft= "0";	
		});
	  }
}
