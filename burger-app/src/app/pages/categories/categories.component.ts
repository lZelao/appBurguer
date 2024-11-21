import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  standalone: true,
  selector: 'app-categories',
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <h1>Categorias</h1>
    <div class="categories">
      <button *ngFor="let category of categories" [routerLink]="['/menu', category]">
        {{ category }}
      </button>
      
    </div>
  
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
export class CategoriesComponent {
  categories = ['Clássicos', 'Especiais', 'Veganos'];
}

