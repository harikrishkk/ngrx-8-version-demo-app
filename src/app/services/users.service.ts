import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserResponse } from '../models/users.model';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  fetchAllUsers() {
    return this.http.get<UserResponse>("https://reqres.in/api/users");
  }
}
