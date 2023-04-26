import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventServicesService } from '../event-services.service';
import { Event } from '../Event'
@Component({
  selector: 'app-adminupdate-event',
  templateUrl: './adminupdate-event.component.html',
  styleUrls: ['./adminupdate-event.component.css']
})
export class AdminupdateEventComponent {


  constructor(private service: EventServicesService, private route: ActivatedRoute, private router : Router) { }

  user?: Event
  data: any
  imgSrc : any ='../../../assets/image-placeholder.jpg'




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

    this.router.navigate(['specifiedadmin']);
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
