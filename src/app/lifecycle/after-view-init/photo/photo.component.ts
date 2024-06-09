import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo, PhotoEvent, PhotoEventType } from '../../../../core/data/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  @Input() photo: Photo | undefined;
  @Input() selected: boolean = false;

  @Output() public onSelect = new EventEmitter<PhotoEvent>();
  @Output() public onRemove = new EventEmitter<PhotoEvent>();

  onPhotoRemove(event:MouseEvent) {
    event.stopPropagation();
    this.selected = false;
    this.onRemove.emit({ photo: this.photo!, type: PhotoEventType.REMOVE });
  }
  onSelectPhoto(event:MouseEvent) {
    event.stopPropagation();
    this.selected = true;
    this.onSelect.emit({ photo: this.photo!, type: PhotoEventType.SELECT });
  }
}
