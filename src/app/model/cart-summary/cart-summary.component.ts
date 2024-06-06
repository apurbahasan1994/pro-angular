import { Component } from '@angular/core';
import { Cart } from '../../../core/data/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  constructor(public cart:Cart){}
}
