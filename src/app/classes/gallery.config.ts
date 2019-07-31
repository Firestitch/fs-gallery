import { guid } from '@firestitch/common';

import { FsGalleryConfig, FsGalleryInfoConfig, FsGalleryItem } from '../interfaces/gallery-config.interface';
import { GalleryLayout } from '../enums/gallery-layout-enum';


export class GalleryConfig {

  public indexField = 'id';
  public allowedFiles = 'image/*';
  public fileField: string;
  public imageField: string;
  public thumbnailField: string;
  public nameField: string;
  public toolbar = true;
  public reorderable = false;
  public reorderEnd: (data: any) => {} = null;
  public imageWidth = 187;
  public imageHeightScale = 0.673;
  public repeat = true;
  public info: any;
  public layout = GalleryLayout.Grid;
  public showCarousel = true;
  public thumbnail = {
    styles: {}
  };

  public zoom = true;

  public filterConfig;
  public filterInit = (query) => {};
  public filterChange = (query) => {};
  public previewClick: (item: FsGalleryItem) => {};
  public previewOpened: (item: FsGalleryItem) => {};
  public previewClosed: (item: FsGalleryItem) => {};

  public upload: (files: any) => void;
  public fetch;

  constructor(data: FsGalleryConfig = {}) {
    this._initConfig(data);
  }

  private _initConfig(data) {
    this.indexField = data.indexField || this.indexField;

    this.reorderable = !!data.reorderEnd;

    if (data.layout) {
      this.layout = data.layout;
    }

    this.repeat = (data.repeat !== undefined) ? data.repeat : true;
    this.showCarousel = (data.showCarousel !== undefined) ? data.showCarousel : true;

    if (data.zoom !== undefined) {
      this.zoom = data.zoom;
    }

    if (data.allowedFiles) {
      this.allowedFiles = data.allowedFiles;
    }

    if (data.thumbnail) {
      this.thumbnail = Object.assign({}, this.thumbnail, data.thumbnail);
    }

    this.info = data.info === undefined ? {} : data.info;
    this.reorderEnd = data.reorderEnd;
    this.imageWidth = data.imageWidth || this.imageWidth;
    this.imageHeightScale = data.imageHeightScale || this.imageHeightScale;
    this.fileField = data.fileField;
    this.toolbar = data.toolbar !== false;
    this.imageField = data.imageField;
    this.thumbnailField = data.thumbnailField;
    this.nameField = data.nameField;
    this.previewClosed = data.previewClosed;
    this.previewOpened = data.previewOpened;


    if (data.upload) {
      this.upload = data.upload;
    }

    if (data.fetch) {
      this.fetch = data.fetch;
    }

    if (data.filters && Array.isArray(data.filters)) {
      this.filterConfig = {
        init: (query) => {
          this.filterInit(query);
        },
        change: (query) => {
          this.filterChange(query);
        },
        items: data.filters.slice(),
      }
    }
  }
}
