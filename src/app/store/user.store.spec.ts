import { TestBed } from '@angular/core/testing';

import { UserStore } from './user.store';

describe('UsersStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserStore = TestBed.get(UserStore);
    expect(service).toBeTruthy();
  });
});
