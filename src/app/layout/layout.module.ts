import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { LayoutRoutes } from './layout.routing';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { IconsComponent } from '../icons/icons.component';
import { TypographyComponent } from '../typography/typography.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { NotificationComponent } from '../notifications/notification.component';
import { UserlistComponent } from '../userlist/userlist.component';
import { ParentTestingComponent } from '../parentTesting/parentTesting.component';
import { ChildTestingComponent } from '../childTesting/childTesting.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(LayoutRoutes),
		ChartsModule
	],
	declarations: [
		DashboardComponent,
		IconsComponent,
		TypographyComponent,
		UserprofileComponent,
		NotificationComponent,
		UserlistComponent,
		ParentTestingComponent,
		ChildTestingComponent
	]
})

export class LayoutModule { }
