/*
 * Public API
 */

// Hack
(window as any).global = window;

// Modules
export { FsGalleryModule } from './app/fs-gallery.module';

// Components
export { FsGalleryComponent } from './app/components/gallery/gallery.component';
export { FsGalleryPreviewComponent } from './app/components/gallery-preview/gallery-preview.component';
export { FsGalleryPreviewCarouselComponent } from './app/components/gallery-preview/carousel/gallery-preview-carousel.component';
export { FsGalleryPreviewHeaderComponent } from './app/components/gallery-preview/header/gallery-preview-header.component';
export { FsGalleryThumbnailComponent } from './app/components/gallery-thumbnail/gallery-thumbnail.component';
export { FsGalleryThumbnailInfoComponent } from './app/components/gallery-thumbnail-info/gallery-thumbnail-info.component';
export { FsGalleryThumbnailContainerDirective } from './app/directives/gallery-thumbnail-container.directive';
export { FsGalleryThumbnailPreviewComponent } from './app/components/gallery-thumbnail-preview/gallery-thumbnail-preview.component';

// Directives
export { FsGalleryThumbnailDirective } from './app/directives/gallery-thumbnail.directive';
export { FsGalleryPreviewDirective } from './app/directives/gallery-preview.directive';

// Interfaces
export { FsGalleryDataItem } from './app/interfaces/gallery-data-item.interface';
export {
  FsGalleryConfig,
  FsGalleryItem,
} from './app/interfaces/gallery-config.interface';
export { FsGalleryThumbnailConfig } from './app/interfaces/gallery-thumbnail-config.interface';

// Services
export { FsGalleryPreviewService } from './app/services/gallery-preview.service';
export { FsGalleryService } from './app/services/gallery.service';


// Enums
export { GalleryLayout } from './app/enums/gallery-layout.enum';
export { ViewSize } from './app/enums/view-size.enum';

// Helpers
export * from './app/helpers';
