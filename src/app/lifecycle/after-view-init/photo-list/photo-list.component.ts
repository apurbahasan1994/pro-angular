import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoEvent, PhotoEventType } from '../../../../core/data/photo.model';
import { Subscription, merge } from 'rxjs';
class SelectedComponent {
  constructor(public readonly instance: PhotoComponent | undefined = undefined, public index: number = 0) { }
}

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent implements AfterContentInit {
  private _componentEvents$ = new Subscription();
  ngAfterContentInit(): void {
    this.handlePhotoComponentEvents(this.photoComponents);
    this.photoComponents.changes.subscribe((queryList: QueryList<PhotoComponent>) => {
      this.handlePhotoComponentEvents(queryList);
    });
  }
  handlePhotoSelection(photoCom: PhotoComponent, currIndex: number, eventType: PhotoEventType) {
    // for getting the previosuly selected componet if there is any
    const { instance: prevSelectedComponent, index } = this.currentlySelectedComponent;
    switch (eventType) {
      case PhotoEventType.SELECT:
        // check if there is any prev selected element and if the index of the prev is not same as current
        if (prevSelectedComponent && index !== currIndex) {
          // if there is a new selected component than make the prev as unselected 
          prevSelectedComponent.selected = false;
        }
        this.currentlySelectedComponent = new SelectedComponent(photoCom, currIndex);
        return;
      case PhotoEventType.REMOVE:
        if (prevSelectedComponent && index === currIndex) {
          this.currentlySelectedComponent = new SelectedComponent();
        }

    }
  }
  resetComponentEvents() {
    if (this._componentEvents$) {
      this._componentEvents$.unsubscribe();
    }
    this._componentEvents$ = new Subscription();
  }
  handlePhotoComponentEvents(components: QueryList<PhotoComponent>) {
    this.resetComponentEvents();
    components.forEach((photoCom: PhotoComponent, currentIndex: number) => {
      const events$ = merge(photoCom.onSelect, photoCom.onRemove)
      const sub$ = events$.subscribe((event: PhotoEvent) => {
        this.handlePhotoSelection(photoCom, currentIndex, event.type)
      })
      this._componentEvents$.add(sub$);
    });
  }
  @ContentChildren(PhotoComponent) public photoComponents!: QueryList<PhotoComponent>;
  public currentlySelectedComponent: SelectedComponent = new SelectedComponent();
  changePhoto(unit: number, $event: MouseEvent) {
    let { index, instance } = this.currentlySelectedComponent;
    const length = this.photoComponents.length;
    if (instance) {
      instance.selected = false;
      index = (index + unit) % length;
      index = index < 0 ? length - 1 : index;
    }
    const photoComponent = this.photoComponents.get(index);
    if (!photoComponent || photoComponent.selected) {
      return;
    }
    this.currentlySelectedComponent = new SelectedComponent(photoComponent, index);
    this.currentlySelectedComponent.instance?.onSelectPhoto($event);
  }

}
