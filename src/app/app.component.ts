import {Component} from "@angular/core";
import '../style.css';

@Component({
    selector: "hellow-app",	
    styleUrls: [String(require("./app.component.scss"))],
    template: require("./app.component.html"),
})
export class HelloComponent {
	title = 'ng7-pre';
}
