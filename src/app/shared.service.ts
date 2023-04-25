import { Injectable } from '@angular/core';
import { Admin } from './adminCRUD/Admin';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private data = new Subject<string>();
  
  setData(value: string) {
    this.data.next(value);
  }

  getData() {
    return this.data.asObservable();
  }

}
