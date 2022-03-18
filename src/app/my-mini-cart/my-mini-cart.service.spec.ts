import { TestBed } from '@angular/core/testing';

import { MyMiniCartService } from './my-mini-cart.service';

describe('MyMiniCartService', () => {
  let service: MyMiniCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMiniCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
