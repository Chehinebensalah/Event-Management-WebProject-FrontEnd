import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {

  constructor(private router : Router, private adminservice :LoginServicesService ){}
  
  ngOnInit(): void{}
  
  getData:boolean | undefined;
  onSubmit(formValue : any){
    //console.log(formValue.id);
    this.adminservice.getadmindata(<number>formValue.id,<string>formValue.mail,formValue.password).subscribe((res:Object)=>{
      localStorage.setItem("id",formValue.id);
      this.getData = res as boolean;
      console.log(res);
      if(this.getData == true ){
        this.router.navigate(['specifiedadmin'])
      }else{
        
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      }
     });
}
}
