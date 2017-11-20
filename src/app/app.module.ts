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


@NgModule({
  declarations: [
    AppComponent,
    TutorialVideoComponent,
    ImageListComponent,
    TutorialVideoListComponent,
    TopBarListComponent,
    TopBarComponent,
    SafePipe
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
