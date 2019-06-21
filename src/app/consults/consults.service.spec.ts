import { TestBed } from '@angular/core/testing';

import { ConsultsService } from './consults.service';

describe('ConsultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultsService = TestBed.get(ConsultsService);
    expect(service).toBeTruthy();
  });
});
