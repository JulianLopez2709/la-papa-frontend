import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(private socket: Socket) {
    this.socket.on('connect', () => {
      console.log('✅ Conectado al servidor WebSocket');
    });

    this.socket.on('disconnect', () => {
      console.log('❌ Desconectado del servidor WebSocket');
    });

  }

  loadFood(callback: (data: any) => void) {
    this.socket.on("server:loadfood", callback);
  }

  saveFood(data: any) {
    this.socket.emit("client:newfood", data);
  }

  deleteFood(id: string) {
    this.socket.emit("client:deletefood", id);
  }

  getFoodById(id: string) {
    this.socket.emit("client:getfood", id);
  }

  onSelectFood(callback: (data: any) => void) {
    this.socket.on("server:getfood", callback);
  }

  updateFood(food: any) {
    this.socket.emit("client:update", food);
  }

}
