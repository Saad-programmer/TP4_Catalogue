import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Auth } from '../../auth';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  constructor(public auth: Auth, private router: Router) {}

  seDeconnecter(): void {
    this.auth.deconnecter();
    this.router.navigate(['/accueil']);
  }
}