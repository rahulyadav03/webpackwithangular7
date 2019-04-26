import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from "@angular/platform-browser"; 
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { ChartsModule } from 'ng2-charts';

import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NotificationComponent } from './notifications/notification.component';

import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}, 
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'userlist', component: UserlistComponent }
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(routes),
    ChartsModule
	],
	declarations: [
	    HomeComponent,
	    AboutComponent,
	    ContactComponent,
		DashboardComponent,
        IconsComponent,
        TypographyComponent,
        UserprofileComponent,
        NotificationComponent,
        UserlistComponent
	]
})

export class AppRoutingModule { }