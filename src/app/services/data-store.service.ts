import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private _users = new BehaviorSubject(undefined);

  get users() {
    return this._users.asObservable();
  }

  constructor() { }

  /**
   * store_user
   * stores the username received in user_list
   */
  public store_user(users) {
    this._users.next(users);
    console.log('(in data-store) users saved');
  }
}
