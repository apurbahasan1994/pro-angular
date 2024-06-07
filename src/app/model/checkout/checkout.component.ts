import { Component } from '@angular/core';
import { OrderRepository } from '../../../core/data/orderRepository';
import { Order } from '../../../core/data/order.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public repository: OrderRepository, public order: Order) { }
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      })
    }
  }
}
