import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabeComponent } from './product-table.component';

describe('ProductTabeComponent', () => {
  let component: ProductTabeComponent;
  let fixture: ComponentFixture<ProductTabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductTabeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
