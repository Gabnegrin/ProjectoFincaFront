import { TestBed } from '@angular/core/testing';

import { AxiosHandlerService } from './axios-handler.service';

describe('AxiosHandlerService', () => {
  let service: AxiosHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
