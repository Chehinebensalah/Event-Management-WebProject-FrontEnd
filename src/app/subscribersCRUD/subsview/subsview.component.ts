import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubServicesService } from '../sub-services.service';


@Component({
  selector: 'app-subsview',
  templateUrl: './subsview.component.html',
  styleUrls: ['./subsview.component.css']
})
export class SubsviewComponent {

  subscribers: any[] | undefined
  //url: string = "http://localhost:8080/";

  constructor(private service: SubServicesService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.subscribers = data;
    })
   
  }

  deleteUser(mail: string){
    this.service.deleteUser(<string>mail).subscribe(data => {
      this.subscribers = this.subscribers?.filter(user => user.mail !== mail);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

}
