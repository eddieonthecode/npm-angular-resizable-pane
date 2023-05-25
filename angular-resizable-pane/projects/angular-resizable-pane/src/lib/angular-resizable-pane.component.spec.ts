import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularResizablePaneComponent } from './angular-resizable-pane.component';

describe('AngularResizablePaneComponent', () => {
  let component: AngularResizablePaneComponent;
  let fixture: ComponentFixture<AngularResizablePaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularResizablePaneComponent]
    });
    fixture = TestBed.createComponent(AngularResizablePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
