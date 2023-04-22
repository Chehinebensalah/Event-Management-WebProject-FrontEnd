import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AddadminComponent } from './adminCRUD/addadmin/addadmin.component';
import { UpdateadminComponent } from './adminCRUD/updateadmin/updateadmin.component';
import { ViewadminComponent } from './adminCRUD/viewadmin/viewadmin.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  { path: 'admins', component: ViewadminComponent },
  { path: 'add', component: AddadminComponent },
  { path: 'update/:cin', component: UpdateadminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
