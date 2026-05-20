import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../auth';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  erreur = '';

  constructor(private auth: Auth, private router: Router) {}

  connecter(): void {
    if (!this.email || !this.password) {
      this.erreur = 'Veuillez remplir tous les champs';
      return;
    }

    this.auth.connecter(this.email);
    this.router.navigate(['/admin']);
  }

  annuler(): void {
    this.router.navigate(['/accueil']);
  }
}