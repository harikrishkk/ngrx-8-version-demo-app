import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../reducers/users.reducer';

export const selectUserStateRoot = createFeatureSelector<UserState>("users");
export const selectAllUsers = createSelector(
  selectUserStateRoot,
  state => state.users
);
