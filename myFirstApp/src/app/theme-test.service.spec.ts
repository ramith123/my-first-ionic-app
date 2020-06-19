import { TestBed } from '@angular/core/testing';

import { ThemeTestService } from './theme-test.service';

describe('ThemeTestService', () => {
  let service: ThemeTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
