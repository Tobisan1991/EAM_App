import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';

import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';
import { ImageListComponent } from './image-list/image-list.component';
import { TutorialVideoListComponent } from './tutorial-video-list/tutorial-video-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopBarListComponent } from './top-bar-list/top-bar-list.component';


const appRoutes: Routes = [
    {
        path:"",
        component: TopBarListComponent,
    },
    {
        path:"topbar",
        component: TopBarListComponent,
    },
    {
        path:"topbar/:slug",
        component: TopBarComponent,
    },
    {
        path:"pictures",
        component: ImageListComponent,
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