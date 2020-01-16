import { createAction, props } from '@ngrx/store';

import { User } from '../models/users.model';

export const fetchUsers = createAction("[App component page]: Fetch users");

export const fetchUsersSuccess = createAction(
  "[Effect]: Fetch users Success",
  props<{ users: User[] }>()
);
export const fetchUsersFail = createAction(
  "[Effect]: Fetch users fail",
  props<{ error: string }>()
);
