import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginmenu',
  templateUrl: './loginmenu.component.html',
  styleUrls: ['./loginmenu.component.css']
})
export class LoginmenuComponent {
  constructor(private router:Router){}
  toadmin(){
    this.router.navigateByUrl('/adminlogin');
  }
  tosuperadmin(){
    this.router.navigateByUrl('/superadminlogin');
  }
}
