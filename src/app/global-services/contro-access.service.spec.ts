import { TestBed } from '@angular/core/testing';

import { ControAccessService } from './control-access.service';

describe('ControAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControAccessService = TestBed.get(ControAccessService);
    expect(service).toBeTruthy();
  });
});
