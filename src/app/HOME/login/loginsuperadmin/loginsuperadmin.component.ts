import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/adminCRUD/Admin';
import { LoginServicesService } from '../login-services.service';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-loginsuperadmin',
  templateUrl: './loginsuperadmin.component.html',
  styleUrls: ['./loginsuperadmin.component.css']
})
export class LoginsuperadminComponent {
  constructor(private router : Router, private adminservice :LoginServicesService,
    private shareddataserviceSET:SharedService ){}
  
  
  ngOnInit(): void{
   
  }



  
  getData:boolean | undefined;
  onSubmit(formValue : any){
    //console.log(formValue.id);
    this.adminservice.
    getadmindata(<number>formValue.id,<string>formValue.mail,formValue.password).
    subscribe((res:Object)=>{
      this.getData = res as boolean;
      console.log(res);
      if(this.getData == true ){

        this.router.navigate(['/login'])
      }else{
        
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      }
     });
     
}





}


  



