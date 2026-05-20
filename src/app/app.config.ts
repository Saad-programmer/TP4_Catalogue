// app.config.ts
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), // v21 : zoneless par defaut
    provideRouter(routes, withComponentInputBinding()), // route params en signals
  ]
};