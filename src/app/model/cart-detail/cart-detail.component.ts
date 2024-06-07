import { Component } from '@angular/core';
import { Cart } from '../../../core/data/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.scss'
})
export class CartDetailComponent {
  constructor(public cart: Cart) { }
}
