import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventServicesService } from 'src/app/eventCRUD/event-services.service';

@Component({
  selector: 'app-listevents',
  templateUrl: './listevents.component.html',
  styleUrls: ['./listevents.component.css']
})
export class ListeventsComponent {

  events: any[] | undefined
  //url: string = "http://localhost:8080/";

  constructor(private service: EventServicesService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.events = data;
    })
    
   
  }
  show(id_event:number){
    localStorage.setItem("id_event",id_event.toString());
    this.router.navigateByUrl('/singlepage');
  }
}
