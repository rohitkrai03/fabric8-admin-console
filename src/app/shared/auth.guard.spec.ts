import {
  TestBed,
  inject
} from '@angular/core/testing';

import {
  AuthGuard
} from './auth.guard';
import {
  AuthenticationService,
  AUTH_API_URL,
  SSO_API_URL,
  WIT_API_PROXY,
  REALM
} from 'ngx-login-client';
import {
  Broadcaster
} from 'ngx-base';
import {
  HttpClient,
  HttpHandler
} from '@angular/common/http';
import {
  Router
} from '@angular/router';

describe('AuthGuard', () => {
  const fakeActivatedRoute = {
    snapshot: {
      data: {}
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, AuthenticationService, Broadcaster,
        {
          provide: AUTH_API_URL,
          useValue: 'https://auth.prod-preview.openshift.io/api/'
        },
        {
          provide: SSO_API_URL,
          useValue: 'https://sso.prod-preview.openshift.io/api/'
        },
        {
          provide: WIT_API_PROXY,
          useValue: 'https://prod-preview.openshift.io/api/'
        },
        {
          provide: REALM,
          useValue: 'realm'
        },
        {
          provide: Router
        },
        HttpClient,
        HttpHandler,
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
