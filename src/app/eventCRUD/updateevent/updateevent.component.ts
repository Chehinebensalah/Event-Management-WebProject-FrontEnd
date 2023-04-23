
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../Event'
import { EventServicesService } from '../event-services.service';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent {
  user?: Event
  data: any
  imgSrc : any ='../../../assets/image-placeholder.jpg'

  constructor(private service: EventServicesService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id_event = this.route.snapshot.params['id_event'];
    this.service.getUserById(<number> id_event).subscribe(data => {
      this.user =  <Event> data
      console.log(this.user)
    })
  }

  form = new FormGroup({
    id_event: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    image_path: new FormControl('', [Validators.required]),
    categorie: new FormControl('', [Validators.required]),
    date_debut: new FormControl('', [Validators.required]),
    date_fin: new FormControl('', [Validators.required]),
    byadmin: new FormControl('', [Validators.required]),
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.service.updateUser(this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['events']);
  }
  //img change methods 
  showPreview($event : any){
    const reader = new FileReader();
    reader.onload= (e :any) => {
      this.imgSrc=e.target.result
    }
    reader.readAsDataURL($event.target.files[0]);
  }
}
