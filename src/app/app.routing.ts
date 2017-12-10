import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';

import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';
import { ImageListComponent } from './image-list/image-list.component';
import { TutorialVideoListComponent } from './tutorial-video-list/tutorial-video-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopBarListComponent } from './top-bar-list/top-bar-list.component';
import { BusinessFunctionComponent } from './business-function/business-function.component';
import { BusinessProcessComponent } from './business-process/business-process.component';
import { AppsystemComponent } from './appsystem/appsystem.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import {BusinessFunctionListComponent} from './business-function-list/business-function-list.component';
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
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
        path:"tutorial",
        component: TutorialVideoListComponent,
    },
    {
        path:"tutorial/:slug",
        component: TutorialVideoComponent,
    },
    {
        path:"function",
        component: BusinessFunctionComponent,
    },
    {
        path:"process",
        component: BusinessProcessComponent,
    },
    {
        path:"appsystem",
        component: AppsystemComponent,
    },
    {
        path:"application",
        component: ApplicationComponent,
    },
    {
        path:"home",
        component: HomeComponent,
    }
    ,
    {
        path:"test",
        component: BusinessFunctionListComponent,
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