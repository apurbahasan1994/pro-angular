import { Component } from '@angular/core';
import { Product } from '../../../core/data/product.model';
import { ProductRepository } from '../../../core/data/product.repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrl: './product-editor.component.scss'
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params['id']));
    }
  }

  save() {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
