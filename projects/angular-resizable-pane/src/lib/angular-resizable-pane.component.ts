import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'angular-resizable-pane',
  templateUrl: './angular-resizable-pane.html',
  styleUrls: ['./angular-resizable-pane.scss']
})
export class AngularResizablePaneComponent implements OnInit, OnDestroy {
  @Input() layout : Layout = {} as Layout;
  @Input() useBtn : boolean = true;

  @ViewChild('section1', {static: false}) section1 : ElementRef;
  @ViewChild('section2', {static: false}) section2 : ElementRef;
  @ViewChild('container', {static: false}) container : ElementRef;

  isResizing = false;
  section1Size = 0;
  section1SizeTemp = 0;
  startX = 0;
  startY = 0;

  ngOnInit() {
    if (this.layout) {
      this.section1Size = Math.max(this.layout.initSize as number, this.layout.minSize || 0);
    }
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
    window.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    window.removeEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  /**
   * Xử lý mousemove
   * @createdby ntdung 26.05.2023
   */
  handleMouseMove(e : MouseEvent) {
    if (this.isResizing && this.container) {
      let containerSize = 0;
      let diffDistance = 0;

      if (this.layout.orientation == 'horizontal') {
        containerSize = this.container.nativeElement.getBoundingClientRect().width;
        diffDistance = this.startX - e.clientX;
      } else {
        containerSize = this.container.nativeElement.getBoundingClientRect().height;
        diffDistance = this.startY - e.clientY;
      }

      if (this.layout.unitType == "percent") {
        let newPercent = (this.section1SizeTemp - diffDistance)/ containerSize * 100;
        if (newPercent >= (this.layout.minSize || 0) && newPercent <= (this.layout.maxSize || 100)) {
          this.section1Size = newPercent;
        } else {
          if (diffDistance < 0) {
            this.section1Size = this.layout.maxSize || 100 ;
          } else {
            this.section1Size = this.layout.minSize || 0;
          }
        }
      } else {
        let newPixel = this.section1SizeTemp - diffDistance;
        
        if (newPixel >= (this.layout.minSize || 0) && newPixel <= (this.layout.maxSize || containerSize)) {
          this.section1Size = newPixel;
        } else {
          if (diffDistance < 0) {
            this.section1Size = this.layout.maxSize || containerSize;
          } else {
            this.section1Size = this.layout.minSize || 0;
          }
        }
      }
    }
  }

  /**
   * Xử lý mouseup
   * @createdby ntdung 26.05.2023
   */
  handleMouseUp(e : MouseEvent) {
    this.isResizing = false;
  }

  /**
   * Hàm format lại đơn vị
   * @createdby ntdung 26.05.2023 
   */
  formatUnit(section1Size : number) {
    return this.layout.unitType == 'pixel' ?  `${section1Size}px` : `${section1Size}%`;
  }

  /**
   * Hàm xử lý mousedown
   * @createdby ntdung 26.05.2023
   */
  handleMousedown(e : MouseEvent) {
    this.isResizing = true;
    this.startX = e.clientX;
    this.startY = e.clientY;

    if (this.layout.orientation == 'horizontal')
      this.section1SizeTemp = this.section1 && this.section1.nativeElement.getBoundingClientRect().width;
      else 
      this.section1SizeTemp = this.section1 && this.section1.nativeElement.getBoundingClientRect().height;
  }
}

export type Layout = {
  orientation: 'horizontal' | 'vertical';
  unitType: 'pixel' | 'percent';
  initSize: number;
  minSize?: number;
  maxSize?: number;
}