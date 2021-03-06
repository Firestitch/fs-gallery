import { FsGalleryThumbnailConfig } from './gallery-thumbnail-config.interface';
import { Observable } from 'rxjs';
import { GalleryLayout } from '../enums/gallery-layout.enum';
import { ViewSize } from '../enums/view-size.enum';
import { IFilterConfigItem } from '@firestitch/filter';
import { FsListSelectionConfig } from '@firestitch/list';
import { FsGalleryPersistance } from './gallery-persist-config.interface';


export interface FsGalleryConfig {
  allow?: string;
  map: (data: any) => FsGalleryMapping,
  repeat?: boolean;
  toolbar?: boolean;
  draggable?: boolean;
  layout?: GalleryLayout;
  filter?: any;
  upload?: (query) => void;
  fetch?: (query) => Observable<FsGalleryItem[]> | FsGalleryItem[];
  filters?: IFilterConfigItem[];
  selection?: FsListSelectionConfig;
  zoom?: boolean;
  reorderEnd?(data: any): any,
  previewBeforeOpen?(item: any): any,
  previewOpened?(item: any): any,
  previewClosed?(item: any): any,
  zoomChanged?(item: number): any,
  dragName?: string;
  info?: boolean | FsGalleryInfoConfig;
  showCarousel?: boolean;
  thumbnail?: FsGalleryThumbnailConfig;
  sizeModeDefault?: ViewSize;
  persist?: FsGalleryPersistance;
}

export interface FsGalleryMapping {
  name?: string,
  preview?: string,
  url?: string,
  mime?: Mime,
  index?: string
}

export interface FsGalleryItem extends FsGalleryMapping {
  data: any
}

export interface FsGalleryInfoConfig {
  icon?: boolean;
  menu?: FsGalleryInfoMenuConfig;
}

export interface FsGalleryInfoMenuConfig {
  actions?: FsGalleryInfoMenuActionConfig[];
}

export interface FsGalleryInfoMenuActionConfig {
  label?: string;
  click?(item: FsGalleryItem): any
}

export interface Mime {
  type: string,
  subtype: string
}
