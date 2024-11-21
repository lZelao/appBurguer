import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-orders',
  imports: [CommonModule,FormsModule],
  template: `<h1>Pedido</h1>

  <form #pedidoForm="ngForm" (ngSubmit)="onSubmit(pedidoForm)">
  
    <div class="form-group">
      <label for="produto">Produto</label>
      <select id="produto" name="produto" ngModel required>
        <option value="Cheeseburger">Cheeseburger</option>
        <option value="Truffle Burger">Truffle Burger</option>
        <option value="Vegan Delight">Vegan Delight</option>
      </select>
    </div>
  
   
    <div class="form-group">
      <label for="quantidade">Quantidade</label>
      <input
        type="number"
        id="quantidade"
        name="quantidade"
        ngModel
        required
        min="1"
        max="10"
        placeholder="Quantos?"
      />
    </div>
  
   
    <div class="form-group">
      <label for="observacoes">Observações</label>
      <textarea id="observacoes" name="observacoes" ngModel rows="4"></textarea>
    </div>
  
    <!-- Botão de Enviar -->
    <button type="submit" [disabled]="pedidoForm.invalid">Enviar Pedido</button>
  </form>
  `,
})
export class OrdersComponent {
  onSubmit(form: any) {
  
    console.log('Pedido enviado:', form.value);
  }

}
