import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FsGalleryModule } from '@firestitch/gallery';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsFileModule } from '@firestitch/file';
import { FsMenuModule } from '@firestitch/menu';
import { FsDrawerModule } from '@firestitch/drawer';
import { FsLabelModule } from '@firestitch/label';

import { DragulaModule } from 'ng2-dragula';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material.module';
import {
  ExampleComponent,
  SimplePreviewComponent,
  ExamplesComponent,
  ConfigureComponent
} from './components';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { FsScrollModule } from '@firestitch/scroll';
import { FsSelectionModule } from '@firestitch/selection';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    DragulaModule.forRoot(),
    FsGalleryModule.forRoot(),
    FsFileModule.forRoot(),
    FsMenuModule,
    RouterModule.forRoot(routes),
    FsExampleModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    FsMessageModule.forRoot(),
    FsScrollModule.forRoot(),
    FsSelectionModule.forRoot(),
    FsDrawerModule,
    FsLabelModule
  ],
  entryComponents: [
    ConfigureComponent
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleComponent,
    SimplePreviewComponent,
    ConfigureComponent
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class PlaygroundModule {
}
