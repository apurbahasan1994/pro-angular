import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewInitComponent } from './after-view-init.component';

describe('AfterViewInitComponent', () => {
  let component: AfterViewInitComponent;
  let fixture: ComponentFixture<AfterViewInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterViewInitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
