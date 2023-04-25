import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Event } from './Event';

@Injectable({
  providedIn: 'root'
})
export class EventServicesService {

  private url = "http://localhost:8080/event/";
  

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(ev: Event){
    return this.http.post<Event>(`${this.url}add`, ev)
  }

  // Get Users - Read
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'getall')
  }

  // Get User by Id - Read
  getUserById(id_event: number): Observable<Event>{
    return this.http.get<Event>(`${this.url}geteventbyid/${<number>id_event}`)
  }

  // Update User - Update
  updateUser(ev: Event): Observable<any>{
    return this.http.put<any>(`${this.url}update/${ev.id_event}`, ev)
  }

  // Delete User - Delete
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

  // get events by id of admin who add it 
  getEventsbyId(id : number): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}geteventbyidadmin/${id}`)
  }


}
