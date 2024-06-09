import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '../../core/data/product.repository';
import { StaticDataSource } from '../../core/data/static.datasource';
import { StoreComponent } from './store/store.component';
import { CounterDirective } from './counter.directive';
import { Cart } from '../../core/data/cart.model';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderRepository } from '../../core/data/orderRepository';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Order } from '../../core/data/order.model';
import { RestDataSource } from '../../core/data/rest.datasource';
import { AuthService } from '../../core/data/auth.service';



@NgModule({
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports: [StoreComponent],
  providers: [ProductRepository, StaticDataSource, Cart, OrderRepository, Order,
    {
      provide: StaticDataSource, useClass: RestDataSource
    },
    RestDataSource,
    AuthService
  ]
})
export class ModelModule { }
