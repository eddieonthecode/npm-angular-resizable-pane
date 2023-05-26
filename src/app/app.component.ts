import { Component } from '@angular/core';
import { Layout } from 'projects/angular-resizable-pane/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  layout : Layout = {
    orientation: 'horizontal',
    unitType: 'percent',
    initSize: 20,
    minSize: 10,
    maxSize: 50
  }
}
