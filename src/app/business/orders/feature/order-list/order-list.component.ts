import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from '../../data-access/order.service';
import { NewOrderCardComponent } from '../../ui/new-order-card/new-order-card.component';
import { TodayOrderCardComponent } from '../../ui/today-order-card/today-order-card.component';
import { Food } from '../../../../model/food';
import { Observable, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { WebSocketService } from '../../../../services/websocket/web-socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [NewOrderCardComponent, TodayOrderCardComponent, AsyncPipe],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {

  textEmpty = ""
  foods: any[] = [];

  public foodList$ !: Observable<Food[]>


  message = []
  constructor(private service: OrderService, private socket: WebSocketService) { }

  ngOnInit(): void {
    this.socket.test().subscribe((message)=> {
      console.log(message)
    });

    this.socket.loadFood().subscribe(message => {
      console.log(message)
    })

    this.foodList$ = this.service.getOrder()


    /*this.socket.loadFood().subscribe({
      next(value) {
        console.log(value)
      },
      error(err) {
        console.log(err)
      },
    })*/

    //this.socket.loadFood()

    /*this.service.getAllData().subscribe(
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


/*
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
*/