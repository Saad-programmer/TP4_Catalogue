import { Router, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.estConnecte()) {
    console.log('Guard: accès autorisé');
    return true;
  }
  
  console.log('Guard: accès refusé, utilisateur non connecté');
  return router.createUrlTree(['/login']);
};