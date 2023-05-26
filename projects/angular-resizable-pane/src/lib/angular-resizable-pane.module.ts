import { NgModule } from '@angular/core';
import { AngularResizablePaneComponent } from './angular-resizable-pane.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AngularResizablePaneComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AngularResizablePaneComponent
  ]
})
export class AngularResizablePaneModule { }
