import { Component } from '@angular/core';
import { EventServicesService } from '../event-services.service';

@Component({
  selector: 'app-view-event-singlepage',
  templateUrl: './view-event-singlepage.component.html',
  styleUrls: ['./view-event-singlepage.component.css']
})
export class ViewEventSinglepageComponent {

  constructor(public getinfodetails : EventServicesService){}
  
  user : any
  id_event : any

  ngOnInit(): void {
    this.id_event = Number(localStorage.getItem("id_event"))
    this.getinfodetails.getUserById(this.id_event).subscribe(data => {
      this.user = data;
    })
   
  }
}
