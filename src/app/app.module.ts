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
import { ApplicListComponent } from './application/applic-list/applic-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchNamePipe } from './search-name.pipe';


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
    ApplicListComponent,
    DashboardComponent,
    SearchNamePipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
