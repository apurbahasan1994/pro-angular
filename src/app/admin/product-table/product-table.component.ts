import { Component, IterableDiffers, IterableDiffer, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../../core/data/product.model';
import { ProductRepository } from '../../../core/data/product.repository';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTabeComponent {
  @ViewChild(MatPaginator)
  paginator?: MatPaginator
  colsAndRows = ["id", "category", "price", "buttons"]
  dataSource = new MatTableDataSource<Product>(this.repository.getProducts());
  differ: IterableDiffer<Product>;
  constructor(private repository: ProductRepository,
    differs: IterableDiffers
  ) {
    this.differ = differs.find(this.repository.getProducts()).create();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.getProducts());
    if (changes !== null) {
      this.dataSource.data = this.repository.getProducts();
    }
  }
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
