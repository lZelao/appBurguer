import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <nav>
    <img src="assets/logo.png" alt="Logo" class="logo" />
    <a routerLink="">Inicio</a>
      
      <a routerLink="">Localização</a>
      <a routerLink="">Contato</a>
      <a routerLink="/orders">Pedidos</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
      }
    `,
  ],
})
export class AppComponent {}
