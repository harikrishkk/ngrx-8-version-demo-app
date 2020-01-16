import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUser from "../reducers/users.reducer";
import { UserState } from "../reducers/users.reducer";

export const selectUserStateRoot = createFeatureSelector<UserState>("users");
export const selectAllUsers = createSelector(
  selectUserStateRoot,
  fromUser.selectAll
);
export const isUsersLoaded = createSelector(
  selectUserStateRoot,
  state => state.allUsersLoaded
);
