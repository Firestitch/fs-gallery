import {
  Component,
  Input,
  Output,
  ContentChild,
  ViewChild,
  EventEmitter,
  TemplateRef,
  OnInit, Injector,
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { FsGalleryThumbnailComponent } from '../gallery-thumbnail/gallery-thumbnail.component';

import { FsGalleryPreviewService } from '../../services/gallery-preview.service';
import { FsGalleryService } from '../../services/gallery.service';
import { FsGalleryPreviewDirective } from '../../directives/gallery-preview.directive';

import { FsGalleryThumbnailDirective } from '../../directives/gallery-thumbnail.directive';
import { GalleryConfig } from '../../classes/gallery.config';
import { FsGalleryItem } from '../../interfaces/gallery-config.interface';


@Component({
  selector: 'fs-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.scss' ],
  providers: [ FsGalleryService ]
})
export class FsGalleryComponent implements OnInit {

  private _config: GalleryConfig = null;

  @Input() set config(value) {
    this._config = new GalleryConfig(value);
    this.galleryService.config = this.config;
  }

  get config(): GalleryConfig {
    return this._config;
  }

  @Output() public reorderImages = new EventEmitter<FsGalleryItem[]>();

  @ContentChild(FsGalleryPreviewDirective, { read: TemplateRef })
  public previewTemplate: FsGalleryPreviewDirective = null;

  @ContentChild(FsGalleryPreviewDirective)
  public previewDirective: FsGalleryPreviewDirective = null;

  @ContentChild(FsGalleryThumbnailDirective, { read: TemplateRef })
  public thumbnailTemplate: FsGalleryThumbnailDirective = null;

  @ContentChild(FsGalleryThumbnailDirective)
  public thumbnailDirective: FsGalleryThumbnailDirective = null;

  @ViewChild('fsGalleryThumbnail')
  public fsGalleryThumbnail: FsGalleryThumbnailComponent = null;

  public data$: BehaviorSubject<FsGalleryItem[]>;
  public dragEnabled = true;

  constructor(
    public galleryService: FsGalleryService,
    private galleryPreviewService: FsGalleryPreviewService,
    private _injector: Injector,
  ) { }

  public ngOnInit() {
    this.galleryService.previewTemplate = this.previewTemplate;
    this.galleryService.thumbnailTemplate = this.thumbnailTemplate;
    this.galleryService.previewDirective = this.previewDirective;
    this.galleryService.thumbnailDirective = this.thumbnailDirective;

    this.data$ = this.galleryService.data$;
    this.dragEnabled = this.galleryService.config.draggable;
  }

  public orderChange(value: FsGalleryItem[], reorder = false): void {

    if (this.config.reorderEnd) {
      this.config.reorderEnd(this.data$.getValue());
    }

    this.data$.next(value);

    if (reorder) {
      this.reorderImages.emit(this.data$.getValue());
    }
  }

  public openPreview(data: FsGalleryItem) {
    if (data.galleryMime === 'image') {
      this.galleryPreviewService.open(this._injector, data);
    }
  }

  public isDragEnabled() {
    return this.dragEnabled;
  }

  public enableDrag() {
    this.dragEnabled = true;
  }

  public disableDrag() {
    this.dragEnabled = false;
  }

  public refresh() {
    this.galleryService.loadData();
  }
}
