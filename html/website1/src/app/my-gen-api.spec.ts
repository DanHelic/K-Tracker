import { TestBed } from '@angular/core/testing';

import { MyGenApi } from './api/my-gen-api';

describe('MyGenApi', () => {
  let service: MyGenApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGenApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
