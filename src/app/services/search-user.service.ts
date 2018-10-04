import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataStoreService } from 'src/app/services/data-store.service';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService implements OnDestroy {

  private baseURL = `auth.openshift.io/api/search/users?q=`;
  private apiResult;
  private result_Subscription: Subscription;

  constructor(
    private http: HttpClient,
    private savedata: DataStoreService
    ) {
  }

  public getusers(username: string = null) {
    if (username != null) {
      console.log('(in search-user Service) SUCCESS: received username ' + username + ' from app');

      this.hitAPI(username);

    } else {
      console.log('(in search-user Service) ERROR: did not receive username from app ' + username);
    }
  }

  private hitAPI(username) {
    const readyURL = `${this.baseURL}${username}`;

    if (username !== '') {

      console.log('(in search-user Service) calling API with URL ' + readyURL);

      this.apiResult = this.http.get(readyURL);
      this.saveUser(this.apiResult);
    } else {
      console.log('(in search-user Service) ERROR: invalid username ' + username);
    }
  }

  private saveUser(api_result: Observable<any>) {

    let users;
    this.result_Subscription = api_result.subscribe(
      res => users = res,
      err => {
        console.log('(in search-user Service) ERROR: no response from server due either of the following reasons:');
        console.log('*User does not exist\n *Bad Connection');
        console.log(err);
        alert('User not Found!!');
      },
      () => {
        console.log('(in search-user Service) SUCCESS: fetched users');
        console.log(users);

        console.log('(in search-user Service) saving users in data-store');
        this.savedata.store_user(users);
      });
  }

  ngOnDestroy() {
    this.result_Subscription.unsubscribe();
  }
}
