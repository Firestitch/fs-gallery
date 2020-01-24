import { FsGalleryConfig, FsGalleryItem } from '../interfaces/gallery-config.interface';
import { GalleryLayout } from '../enums/gallery-layout-enum';


export class GalleryConfig {

  public allow = 'image/*';
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
  public previewBeforeOpen: (item: FsGalleryItem) => {};
  public map: (data: any) => {};

  public upload: (files: any) => void;
  public fetch;

  constructor(data: FsGalleryConfig) {
    this._initConfig(data);
  }

  private _initConfig(data) {

    this.reorderable = !!data.reorderEnd;

    if (data.layout) {
      this.layout = data.layout;
    }

    this.repeat = (data.repeat !== undefined) ? data.repeat : true;
    this.showCarousel = (data.showCarousel !== undefined) ? data.showCarousel : true;

    if (data.zoom !== undefined) {
      this.zoom = data.zoom;
    }

    if (data.allow) {
      this.allow = data.allow;
    }

    if (data.thumbnail) {
      this.thumbnail = Object.assign({}, this.thumbnail, data.thumbnail);
    }

    this.info = data.info === undefined ? {} : data.info;
    this.reorderEnd = data.reorderEnd;
    this.imageWidth = data.imageWidth || this.imageWidth;
    this.imageHeightScale = data.imageHeightScale || this.imageHeightScale;
    this.toolbar = data.toolbar !== false;
    this.map = data.map;
    this.previewClosed = data.previewClosed;
    this.previewOpened = data.previewOpened;
    this.previewBeforeOpen = data.previewBeforeOpen;

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
