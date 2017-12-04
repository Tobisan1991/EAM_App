import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';
import { ImageListComponent } from './image-list/image-list.component';
import { TutorialVideoListComponent } from './tutorial-video-list/tutorial-video-list.component';
import { TopBarListComponent } from './top-bar-list/top-bar-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SafePipe } from './utility/safe.pipe';
import { BusinessFunctionComponent } from './business-function/business-function.component';
import { BusinessProcessComponent } from './business-process/business-process.component';
import { AppsystemComponent } from './appsystem/appsystem.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { BusinessFunctionListComponent } from './business-function-list/business-function-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorialVideoComponent,
    ImageListComponent,
    TutorialVideoListComponent,
    TopBarListComponent,
    TopBarComponent,
    SafePipe,
    BusinessFunctionComponent,
    BusinessProcessComponent,
    AppsystemComponent,
    ApplicationComponent,
    HomeComponent,
    BusinessFunctionListComponent
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
