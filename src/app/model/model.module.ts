import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '../../core/data/product.repository';
import { StaticDataSource } from '../../core/data/static.datasource';
import { StoreComponent } from './store/store.component';
import { CounterDirective } from './counter.directive';
import { Cart } from '../../core/data/cart.model';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';



@NgModule({
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StoreComponent],
  providers: [ProductRepository, StaticDataSource, Cart]
})
export class ModelModule { }
