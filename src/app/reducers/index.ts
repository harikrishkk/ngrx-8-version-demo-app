import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { userReducer } from './users.reducer';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  users: userReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
