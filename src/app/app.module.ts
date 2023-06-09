import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularResizablePaneModule } from '../../projects/angular-resizable-pane/src/public-api'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularResizablePaneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
