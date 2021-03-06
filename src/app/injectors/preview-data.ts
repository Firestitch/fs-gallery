import { InjectionToken } from '@angular/core';

/** Injection token that can be used to access the data that was passed in to a preview component. */
export const PREVIEW_DATA = new InjectionToken<any>('fs.gallery-preview');
