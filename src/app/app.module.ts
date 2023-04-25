import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddadminComponent } from './adminCRUD/addadmin/addadmin.component';
import { UpdateadminComponent } from './adminCRUD/updateadmin/updateadmin.component';
import { ViewadminComponent } from './adminCRUD/viewadmin/viewadmin.component';
import { AddeventComponent } from './eventCRUD/addevent/addevent.component';
import { UpdateeventComponent } from './eventCRUD/updateevent/updateevent.component';
import { VieweventComponent } from './eventCRUD/viewevent/viewevent.component';
import { AboutComponent } from './HOME/about/about.component';
import { NavbarComponent } from './HOME/navbar/navbar.component';
import { CreatorsComponent } from './HOME/creators/creators.component';
import { SubscriptionFormComponent } from './HOME/subscription-form/subscription-form.component';
import { LoginmenuComponent } from './HOME/login/loginmenu/loginmenu.component';
import { LoginadminComponent } from './HOME/login/loginadmin/loginadmin.component';
import { LoginsuperadminComponent } from './HOME/login/loginsuperadmin/loginsuperadmin.component';
import { ListeventsComponent } from './HOME/listevents/listevents.component';
import { SubsviewComponent } from './subscribersCRUD/subsview/subsview.component';
import { AdminviewEVENTComponent } from './eventCRUD/adminview-event/adminview-event.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AddadminComponent,
    UpdateadminComponent,
    ViewadminComponent,
    AddeventComponent,
    UpdateeventComponent,
    VieweventComponent,
    AboutComponent,
    NavbarComponent,
    CreatorsComponent,
  
    SubscriptionFormComponent,
    LoginmenuComponent,
    LoginadminComponent,
    LoginsuperadminComponent,
    ListeventsComponent,
    SubsviewComponent,
    AdminviewEVENTComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
