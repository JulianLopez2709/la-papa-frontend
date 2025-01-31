import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Food {
    "id": number,
    "description": string,
    "price": number,
    "title": "Paisa",
    "isprocess": boolean,
    "table": string,
    "duration": string,
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getAllData():Observable<Food[]>{
    return this.http.get<Food[]>(`http://localhost:3000/all`)
  }
}
