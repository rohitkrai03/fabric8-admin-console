import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private users_list = new BehaviorSubject(undefined);
  public currentuser = this.users_list.asObservable();

  constructor() { }

  /**
   * store_user
   * stores the username received in user_list
   */
  public store_user(users) {
    this.users_list.next(users);
    console.log('(in data-store) users saved');
  }
}
