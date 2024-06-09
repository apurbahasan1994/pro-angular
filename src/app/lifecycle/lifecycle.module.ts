import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterViewInitModule } from './after-view-init/after-view-init.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AfterViewInitModule
  ],
  exports: []
})
export class LifecycleModule { }
