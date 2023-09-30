import { TestBed } from '@angular/core/testing';

import { BeautyPageService } from './beauty-page.service';

describe('BeautyPageService', () => {
  let service: BeautyPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautyPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
