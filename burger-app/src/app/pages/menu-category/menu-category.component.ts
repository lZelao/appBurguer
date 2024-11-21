import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-menu-category',
  imports: [CommonModule],
  template: `
    <h1>Categoria: {{ category }}</h1>

<div class="product-list">
  <div *ngFor="let item of items" class="card">
    <img [src]="item.image" alt="{{ item.name }}" class="card-image">
    <div class="card-content">
      <h3 class="card-title">{{ item.name }}</h3>
      <p class="card-price">R$ {{ item.price | number: '1.2-2' }}</p>
      <button class="card-button">Adicionar</button>
    </div>
  </div>
</div>

  `,
  styleUrls: ['./menu-category.component.css'],
})
export class MenuCategoryComponent implements OnInit {
  category!: string;
  items: { name: string; price: number; image: string }[] = [];

  allItems: Record<
    'Clássicos' | 'Especiais' | 'Veganos',
    { name: string; price: number; image: string }[]
  > = {
    Clássicos: [
      { name: 'Cheeseburger', price: 15, image: 'assets/image4.png' },
      { name: 'Hambúrguer Clássico', price: 18, image: 'assets/image4.png' },
    ],
    Especiais: [
      { name: 'Truffle Burger', price: 25, image: 'assets/image4.png' },
      { name: 'BBQ Burger', price: 22, image: 'assets/image4.png' },
    ],
    Veganos: [
      { name: 'Vegan Delight', price: 20, image: 'assets/image4.png' },
      { name: 'Veggie Burger', price: 18, image: 'assets/image4.png' },
    ],
    
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category') as keyof typeof this.allItems;
    if (category && category in this.allItems) {
      this.items = this.allItems[category];
    } else {
      this.items = [];
    }
  }
}
