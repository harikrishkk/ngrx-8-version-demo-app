import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fetchUsers } from './actions/users.action';
import { User } from './models/users.model';
import { AppState } from './reducers';
import { selectAllUsers } from './selectors/users.selector';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ngrx-demo";
  users$: Observable<User[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(fetchUsers());
    this.users$ = this.store.pipe(select(selectAllUsers));
  }
}
