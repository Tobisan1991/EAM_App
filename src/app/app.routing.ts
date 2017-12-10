import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';
import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';
import { TutorialVideoListComponent } from './tutorial-video-list/tutorial-video-list.component';
import { BusinessFunctionComponent } from './business-function/business-function.component';
import { BusinessProcessComponent } from './business-process/business-process.component';
import { AppsystemComponent } from './appsystem/appsystem.component';
import { Application } from './application/application.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
<<<<<<< HEAD
    
=======
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
>>>>>>> 2b17e4aa7001818947fe6e992262c82eef7ab98f
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
        component: Application,
    },
    {
        path:"home",
        component: HomeComponent,
    }
    ,
    


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