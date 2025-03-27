import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginrequiredGuard } from './loginrequired.guard';

describe('loginrequiredGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginrequiredGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
