import { Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuCategoryComponent } from './pages/menu-category/menu-category.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:category', component: MenuCategoryComponent },
  { path: 'categories', component: CategoriesComponent },
];
