import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-resizable-pane',
  templateUrl: './angular-resizable-pane.html',
  styleUrls: ['./angular-resizable-pane.scss']
})
export class AngularResizablePaneComponent {
  @Input() layouts : Layout[] = [];
}

export class Layout {
  constructor(template : string, initSize: string) {
    this.template = template;
    this.initSize = initSize;
  }
  template: string;
  initSize: string;
  minSize?: string;
  maxSize?: string;
  disable?: boolean;
  orientation?: 'horizontal' | 'vertical' = 'horizontal';
  layouts?: Layout[];
}
