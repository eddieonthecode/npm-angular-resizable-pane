import { TestBed } from '@angular/core/testing';

import { AngularResizablePaneService } from './angular-resizable-pane.service';

describe('AngularResizablePaneService', () => {
  let service: AngularResizablePaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularResizablePaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
