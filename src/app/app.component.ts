import { Component } from '@angular/core';
import { Layout } from 'projects/angular-resizable-pane/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  layouts : Layout[] = [
    {
      initSize: '50%',
      template: 'section1'
    }
  ]
}
