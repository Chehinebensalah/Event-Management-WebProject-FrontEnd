import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AddadminComponent } from './adminCRUD/addadmin/addadmin.component';
import { UpdateadminComponent } from './adminCRUD/updateadmin/updateadmin.component';
import { ViewadminComponent } from './adminCRUD/viewadmin/viewadmin.component';
import { VieweventComponent } from './eventCRUD/viewevent/viewevent.component';
import { AddeventComponent } from './eventCRUD/addevent/addevent.component';
import { UpdateeventComponent } from './eventCRUD/updateevent/updateevent.component';
import { AboutComponent } from './HOME/about/about.component';
import { CreatorsComponent } from './HOME/creators/creators.component';
import { LoginmenuComponent } from './HOME/login/loginmenu/loginmenu.component';
import { ListeventsComponent } from './HOME/listevents/listevents.component';
import { LoginsuperadminComponent } from './HOME/login/loginsuperadmin/loginsuperadmin.component';
import { LoginadminComponent } from './HOME/login/loginadmin/loginadmin.component';
import { SubsviewComponent } from './subscribersCRUD/subsview/subsview.component';
import { AdminviewEVENTComponent } from './eventCRUD/adminview-event/adminview-event.component';
import { ViewEventSinglepageComponent } from './eventCRUD/view-event-singlepage/view-event-singlepage.component';


const routes: Routes = [
// HOME COMPONENTS
  {path:'',component:AboutComponent},
  {path:'Creators',component:CreatorsComponent},
  {path:'Homeevents',component:ListeventsComponent},
  {path:'Loginmenu',component:LoginmenuComponent},
// login super admin 
  {path:'superadminlogin',component:LoginsuperadminComponent},
//login admin 
  {path:'adminlogin',component:LoginadminComponent},
//DASHBOARD 
  {path:'login',component:DashboardComponent},
//ADMINS
  { path: 'admins', component: ViewadminComponent },
  { path: 'admin/add', component: AddadminComponent },
  { path: 'admin/update/:cin', component: UpdateadminComponent },
// EVENTS
  { path: 'events', component: VieweventComponent },
  { path: 'event/add', component: AddeventComponent },
  { path: 'event/update/:id_event', component: UpdateeventComponent },
//normal admin view his events
  {path:'specifiedadmin',component:AdminviewEVENTComponent},
//single page 
  {path:'singlepage',component:ViewEventSinglepageComponent},
  //subs 
  {path:'subscribers',component:SubsviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
