import { ComponentRef, Directive, ElementRef, Input, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { StoreComponent } from './store/store.component';

@Directive({
  selector: '[counterOf]'
})
export class CounterDirective {
  @Input('counterOf') counter: number = 0;
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {
  } 
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.counter)
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1))
    }
  }
}

export class CounterDirectiveContext {
  constructor(public $implicit: any) {
  }
}