import { Component } from '@angular/core';
import { Cart } from '../../../core/data/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  constructor(public cart:Cart,private router : Router){}
  navigateToCart(){
    this.router.navigateByUrl('/cart');
    
  }
}
