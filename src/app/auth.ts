import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private _connecte = false;
  private _utilisateur = '';

  estConnecte(): boolean {
    return this._connecte;
  }

  getUtilisateur(): string {
    return this._utilisateur;
  }

  connecter(email: string): void {
    this._connecte = true;
    this._utilisateur = email;
    console.log(`Utilisateur ${email} connecté`);
  }

  deconnecter(): void {
    console.log(`Utilisateur ${this._utilisateur} déconnecté`);
    this._connecte = false;
    this._utilisateur = '';
  }
}