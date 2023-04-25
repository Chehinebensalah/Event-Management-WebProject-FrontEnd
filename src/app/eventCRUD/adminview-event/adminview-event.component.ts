import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventServicesService } from '../event-services.service';
import { LoginmenuComponent } from 'src/app/HOME/login/loginmenu/loginmenu.component';
import { LoginadminComponent } from 'src/app/HOME/login/loginadmin/loginadmin.component';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-adminview-event',
  templateUrl: './adminview-event.component.html',
  styleUrls: ['./adminview-event.component.css']
})
export class AdminviewEVENTComponent {

  events: any[] | undefined
  //url: string = "http://localhost:8080/";

  constructor(private service: EventServicesService, private router: Router) { 
   
  }

  idget :any

  ngOnInit(): void {
    this.idget = Number(localStorage.getItem("id"));
    this.service.getEventsbyId(this.idget).subscribe(data => {
      this.events = data;
    })
   
  }

  deleteUser(id_event: number){
    this.service.deleteUser(<number>id_event).subscribe(data => {
      this.events = this.events?.filter(user => user.id_event !== id_event);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateUser(id_event: number){
    this.router.navigate(['event/update', <number>id_event]);
  }



}
