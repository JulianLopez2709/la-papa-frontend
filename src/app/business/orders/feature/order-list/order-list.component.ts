import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../data-access/order.service';
import { Food } from '../../data-access/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit{
  data: Food[] = []
  constructor(private service: OrderService) { }
  ngOnInit(): void {
    this.service.getAllData().subscribe(
      (response) => {
        console.log('Datos recibidos:', response); // Verifica los datos
        this.data = response;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
