import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { SocketIoConfig, Socket } from 'ngx-socket-io';

const socketConfig: SocketIoConfig = {
  url: 'http://localhost:3000', // Ajusta según tu backend
  options: {
    //transports: ['websocket', 'polling'],
    //autoConnect: true,
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    //{ provide: Socket, useFactory: () => new Socket(socketConfig) }
  ]
};
