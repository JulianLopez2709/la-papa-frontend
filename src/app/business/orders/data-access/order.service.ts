import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../../../model/food';
import { WebSocketService } from '../../../services/websocket/web-socket.service';

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
  getAllData(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/all`)
  }
}
