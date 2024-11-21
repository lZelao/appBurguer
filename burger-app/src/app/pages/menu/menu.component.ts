import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
   
    <h1>Categorias</h1>
    <div class="categories" >
      <button *ngFor="let category of categories" [routerLink]="['/menu', category]">
        {{ category }}
      </button>
      <img src="assets/image3.png" alt="Logo" class="imagem" />
    </div>
    <div class="center-container"> 
      <a routerLink="/orders"><button >Fazer Pedido</button></a>
    <button class="secondary">Acessar Cardapio </button>
    </div>
  `,
  styles: [
    `
      .categories button {
        margin: 10px;
      }
    `,
  ],
})
export class MenuComponent {
  categories = ['Clássicos', 'Especiais', 'Veganos'];
}
