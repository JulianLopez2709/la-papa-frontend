import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../../../model/food';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';

  /*connect(): void {
    this.socket = new WebSocket(`${this.apiUrl}`)

    this.socket.onopen = ()=>{
      console.log("Web Socket Connect ")
    }
  }*/

  getOrder(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/order`)
  }

  getOrderDay(){
    return this.http.get(`${this.apiUrl}/order/day`)
  }
}
