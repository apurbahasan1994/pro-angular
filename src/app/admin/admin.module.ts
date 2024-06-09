import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { ProductTabeComponent } from './product-table/product-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { MaterialModule } from '../material/material.module';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTabeComponent,
    ProductEditorComponent,
    OrderTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      { path: "auth", component: AuthComponent },
      {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
          { path: "products/:mode/:id", component: ProductEditorComponent },
          { path: "products/:mode", component: ProductEditorComponent },
          { path: "products", component: ProductTabeComponent },
          { path: "orders", component: OrderTableComponent },
          { path: "**", redirectTo: "products" }
        ]
      },
      { path: "**", redirectTo: "auth" }
    ])
  ],
  providers:[AuthGuard]
})
export class AdminModule { }
