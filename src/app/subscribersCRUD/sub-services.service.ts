import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from './subsview/Subscriber';


@Injectable({
  providedIn: 'root'
})
export class SubServicesService {

  private url = "http://localhost:8080/subscriber/";

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(ev: Subscriber){
    return this.http.post<Subscriber>(`${this.url}add`, ev)
  }

  // Get Users - Read
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'getall')
  }

  // Get User by Id - Read
  getUserById(mail:string): Observable<Subscriber>{
    return this.http.get<Subscriber>(`${this.url}getsubscriberbyid/${mail}`)
  }

  // Update User - Update
  updateUser(ev: Subscriber): Observable<any>{
    return this.http.put<any>(`${this.url}update/${ev.mail}`, ev)
  }

  // Delete User - Delete
  deleteUser(mail:string): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${mail}`)
  }
}
