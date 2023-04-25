import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubServicesService } from '../../subscribersCRUD/sub-services.service'

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  

  constructor(private service:SubServicesService){}

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    mail : new FormControl('',[Validators.required])
  })
  data :any

  submit(){
    
    this.data = this.form.value
    
    console.log(this.data)

    this.service.adduser(this.data).subscribe(data => {
      console.log(data)
    })

}
}