import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServicesService } from '../event-services.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent {
  events: any[] | undefined
  //url: string = "http://localhost:8080/";

  constructor(private service: EventServicesService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
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
