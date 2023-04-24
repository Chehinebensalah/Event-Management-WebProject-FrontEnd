import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http:HttpClient) { }

  getadmindata(cin :number ,username: string,password: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.get('http://localhost:8080/admin/'+cin +'/'+username+'/'+password,httpOptions);
  }
}
