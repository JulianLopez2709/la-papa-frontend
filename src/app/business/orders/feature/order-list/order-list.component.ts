import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../data-access/order.service';
import { NewOrderCardComponent } from '../../ui/new-order-card/new-order-card.component';
import { TodayOrderCardComponent } from '../../ui/today-order-card/today-order-card.component';
import { Food } from '../../../../model/food';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { WebSocketService } from '../../../../services/websocket/web-socket.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [NewOrderCardComponent, TodayOrderCardComponent, AsyncPipe],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {
  data: Food[] = [
    {
      "id": 112,
      "description": "Papa, Salchicha, Chicharrón, Chorizo, Tocineta, Huevos de codorniz, Madurito, Guacamole, Frijol, Queso Mozzarella y Salsas., note:  Es Para LLevar, cantidad : 2, Salsas: [Leña, Dulce de Maiz, Showy Ajo]",
      "price": 46000,
      "title": "Paisa",
      "isprocess": false,
      "table": "1",
      "duration": "82",
    }
  ]

  public foodList$ !: Observable<Food[]>

  constructor(private service: OrderService, private socket : WebSocketService) { }

  ngOnInit(): void {
    this.foodList$ = this.service.getAllData()

    /*his.service.getAllData().subscribe(
      (response) => {
        console.log('Datos recibidos:', response); // Verifica los datos
        this.FoodList = response;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );*/
  }
}
