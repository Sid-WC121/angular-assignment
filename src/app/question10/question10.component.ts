import { Component } from '@angular/core';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrl: './question10.component.css'
})
export class Question10Component {
  cartItems: string[] = ['Bread', 'Milk', 'Egg'];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.cartItems.push(this.newItem);
      this.newItem = '';
    }
  }
}
