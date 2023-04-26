import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventServicesService } from '../event-services.service';
@Component({
  selector: 'app-adminadd-event',
  templateUrl: './adminadd-event.component.html',
  styleUrls: ['./adminadd-event.component.css']
})
export class AdminaddEventComponent {

  constructor(private service: EventServicesService, private router: Router) { }

  data: any

  imgSrc : any ='../../../assets/image-placeholder.jpg'
  
  form = new FormGroup({
    id_event: new FormControl('', []),
    name: new FormControl('', [Validators.required]),
    image_path: new FormControl('', [Validators.required]),
    categorie: new FormControl('', [Validators.required]),
    date_debut: new FormControl('', [Validators.required]),
    date_fin: new FormControl('', [Validators.required]),
    byadmin: new FormControl('', [Validators.required]),
    description:new FormControl('', [Validators.required])
  })
  

  
  ngOnInit(): void {
    
    
  }

  
  submit(){
    
    this.data = this.form.value
    
    console.log(this.data)

    this.service.adduser(this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigateByUrl("/specifiedadmin");
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
