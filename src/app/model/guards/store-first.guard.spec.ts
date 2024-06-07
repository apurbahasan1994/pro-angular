import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { storeFirstGuard } from './store-first.guard';

describe('storeFirstGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => storeFirstGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
