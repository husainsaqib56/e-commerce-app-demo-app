import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  addCart = new Subject();
  checkOutItems = new Subject();

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("assets/db.json")
  }
}
