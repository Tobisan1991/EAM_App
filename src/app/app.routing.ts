import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';

import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';
import { ImageListComponent } from './image-list/image-list.component';
import { TutorialVideoListComponent } from './tutorial-video-list/tutorial-video-list.component';

const appRoutes: Routes = [

    {
        path:"pictures",
        component: ImageListComponent,
    },{
        path:"",
        component: TutorialVideoListComponent,
    },
    {
        path:"videos",
        component: TutorialVideoListComponent,
    },
{
    path:"videos/:slug",
    component: TutorialVideoComponent,
}


]

@NgModule({
  imports:[
      RouterModule.forRoot(
         appRoutes 
      )
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule{}