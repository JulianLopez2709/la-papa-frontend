import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket : any

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.socket = io("ws://localhost:3000/");
    }
    
    /*this.socket.on('connect', () => {
      console.log('✅ Conectado al servidor WebSocket');
    });

    this.socket.on('disconnect', () => {
      console.log('❌ Desconectado del servidor WebSocket');
    });*/
    
    /*this.socket.on('client:test', (msa : any)=>{
      console.log(msa)
    })*/

  }

  loadFood(): Observable<any> {
    return new Observable(observable => {
      if (!this.socket) {
        console.error('Socket no está conectado');
        return;
      }

      this.socket.on('server:loadfood', (message: any) => {
        observable.next(message);
      });

      // Desconectar cuando se complete
      return () => {
        if (this.socket) {
          this.socket.off('server:loadfood');
        }
      };
    });
  }

  // Método para probar la conexión
  test(): Observable<any> {
    return new Observable(observable => {
      if (!this.socket) {
        console.error('Socket no está conectado');
        return;
      }

      this.socket.on('client:test', (message: any) => {
        observable.next(message);
      });

      // Desconectar cuando se complete
      return () => {
        if (this.socket) {
          this.socket.off('client:test');
        }
      };
    });
  }
/*
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
*/
}
