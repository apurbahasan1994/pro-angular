import { Component } from '@angular/core';
import { Photo, PhotoEvent } from '../../../../core/data/photo.model';
import { PHOTOS } from '../model/photos';

@Component({
  selector: 'app-content-children',
  templateUrl: './content-children.component.html',
  styleUrl: './content-children.component.scss'
})
export class ContentChildrenComponent {
  photos: Photo[] = PHOTOS;
  onSelect(evt: PhotoEvent) {
  }
  onRemove(evt: PhotoEvent) {
    this.photos = this.photos.filter((p) => p !== evt.photo);
  }
}
