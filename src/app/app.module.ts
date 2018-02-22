import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';

import { TutorialVideoListComponent } from './tutorial-video-list/tutorial-video-list.component';
import { SafePipe } from './utility/safe.pipe';
import { BusinessFunctionComponent } from './business-function/business-function.component';
import { BusinessProcessComponent } from './business-process/business-process.component';
import { AppsystemComponent } from './appsystem/appsystem.component';
import { Application } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { BfuncListComponent } from './business-function/bfunc-list/bfunc-list.component';
import { BpListComponent } from './business-process/bp-list/bp-list.component';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { AppsysListComponent } from './appsystem/appsys-list/appsys-list.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchNamePipe } from './search-name.pipe';
import { OrderByPipe } from './order-by.pipe';
import { MyDatePickerModule} from 'mydatepicker';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./authentication.service";
import {NavbarService} from "./navbar.service";

import {ChartsModule} from 'ng2-charts/ng2-charts';
import {Chart} from 'chart.js';



@NgModule({
  declarations: [
    AppComponent,
    TutorialVideoComponent,
    TutorialVideoListComponent,
    SafePipe,
    BusinessFunctionComponent,
    BusinessProcessComponent,
    AppsystemComponent,
    Application,
    HomeComponent,
    BfuncListComponent,
    DashboardComponent,
    SearchNamePipe,
    OrderByPipe,
    LoginComponent,
    ApplicationListComponent,
    BpListComponent,
    AppsysListComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDatePickerModule,
    ChartsModule

  ],
  providers: [AuthenticationService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
