import { TestBed } from '@angular/core/testing';

import { RittenResolver } from './ritten.resolver';

describe('RittenResolver', () => {
  let resolver: RittenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RittenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
