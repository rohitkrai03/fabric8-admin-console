import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UsersContainerComponent } from './users-container.component';
import { UserService } from 'ngx-login-client';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Logger, Broadcaster } from 'ngx-base';
import { AUTH_API_URL } from 'ngx-login-client';

describe('UsersContainerComponent', () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
