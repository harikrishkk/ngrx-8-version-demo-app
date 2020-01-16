import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { UserActions } from '../actions/users.types';
import { User } from '../models/users.model';

export interface UserState extends EntityState<User> {
  allUsersLoaded: boolean;
}
export const adapter = createEntityAdapter<User>();
export const initialUserState = adapter.getInitialState({
  allUsersLoaded: false
});
// export const INITIAL_STATE: UserState = {
//   users: null,
//   isLoading: false,
//   error: ""
// };

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.fetchUsers, (state, action) => {
    return {
      ...state,
      isLoading: true
    };
  }),

  on(UserActions.fetchUsersSuccess, (state, action) => {
    return adapter.addAll(action.users, {
      ...state,
      allUsersLoaded: true
    });
  }),

  on(UserActions.fetchUsersFail, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  })
);

export const { selectAll } = adapter.getSelectors();
