export interface FsGalleryThumbnailConfig {
  styles?: {
    width?: string;
    height?: string;
  },
  heightScale?: number;
  width?: number;
  size?: 'cover' | 'contain';
  position?: string;
}
