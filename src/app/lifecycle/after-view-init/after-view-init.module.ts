import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChildrenComponent } from './content-children/content-children.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { AfterViewInitComponent } from './after-view-init/after-view-init.component';



@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoComponent,
    ContentChildComponent,
    ContentChildrenComponent,
    AfterViewInitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AfterViewInitModule { }
