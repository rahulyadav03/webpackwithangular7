import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'chart.js';


import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

import {HelloComponent} from "./app.component";

import { NavComponent } from './nav/nav.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { UserlistComponent } from './userlist/userlist.component';

import { LayoutComponent } from './layout/layout.component';

import { UserService } from './userlist/userService/user.service';
import { LoginService } from './login/login.service';



const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}, 
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: "es6-promise-loader?[name]!./layout/layout.module#LayoutModule"
      }
    ]
  }
];

@NgModule({
    imports: [BrowserModule, 
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule ], // import Angular's BrowserModule
    bootstrap:    [HelloComponent],  // indicate the bootstrap component
    providers: [UserService, LoginService],
    declarations: [
            LoginComponent,
            SignupComponent,
            HelloComponent,
            NavComponent,
            HeaderComponent,
            HomeComponent,
            AboutComponent,
            ContactComponent,
            LayoutComponent
          ], // register our component with the module
})

export class AppModule {}