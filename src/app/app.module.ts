import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';
import { ImageListComponent } from './image-list/image-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorialVideoComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
