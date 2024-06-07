import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModelModule } from './model/model.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './model/store/store.component';
import { CartDetailComponent } from './model/cart-detail/cart-detail.component';
import { CheckoutComponent } from './model/checkout/checkout.component';
import { StoreFirstGuard } from './model/guards/store-first.guard';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSlideToggleModule,
    ModelModule,
    RouterModule.forRoot([
      {path:"store",component:StoreComponent,canActivate:[StoreFirstGuard]},
      {path:"cart",component:CartDetailComponent,canActivate:[StoreFirstGuard]},
      {path:"checkout",component:CheckoutComponent,canActivate:[StoreFirstGuard]},
      {path:"**",redirectTo:'/store'}
    ])
  ],
  providers: [
    provideAnimationsAsync(),
    StoreFirstGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
