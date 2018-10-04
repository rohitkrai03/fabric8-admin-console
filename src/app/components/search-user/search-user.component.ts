import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../../services/search-user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  constructor(private searchuserService: SearchUserService) { }

  ngOnInit() {
  }

  onSearch(username: string = null) {
    if (username != null) {

      console.log('(in search Component) SUCCESS: recieved user ' + username);
      console.log('(in search Component) calling search-user service with username ' + username);

      this.searchuserService.getusers(username);

    } else {
      console.log('(in app Component) ERROR: username not recieved from search component ' + username);
    }
  }

}
