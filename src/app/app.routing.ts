import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';
import { TutorialVideoComponent } from './tutorial-video/tutorial-video.component';
import { TutorialVideoListComponent } from './tutorial-video-list/tutorial-video-list.component';
import { BusinessFunctionComponent } from './business-function/business-function.component';
import { BfuncListComponent } from './business-function/bfunc-list/bfunc-list.component';
import { BpListComponent } from './business-process/bp-list/bp-list.component';
import { BusinessProcessComponent } from './business-process/business-process.component';
import { AppsystemComponent } from './appsystem/appsystem.component';
import { ApplicationListComponent }  from './application/application-list/application-list.component';
import { Application } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from "./login/login.component";
const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },


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
        path:"function/:name",
        component: BfuncListComponent,
    },
    {
        path:"process/:name",
        component: BpListComponent,
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
        path:"application:/Name",
        component: ApplicationListComponent,
    },
    {
        path:"home",
        component: HomeComponent,
    },
    {
        path:"dashboard",
        component: DashboardComponent,
    },
    {
      path:"login",
      component: LoginComponent,
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
