import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, USERS_FEATURE_KEY } from '../state/user.state';

export const getUsersState = createFeatureSelector<UserState>(USERS_FEATURE_KEY);

export const getUsersLoaded = createSelector(
  getUsersState,
  (state: UserState) => state && state.loaded
);

export const getUsersError = createSelector(
  getUsersState,
  (state: UserState) => state.error
);

export const getAllUsers = createSelector(
  getUsersState,
  (state: UserState) => state.users
);

export const ll =  createSelector(
  getUsersState,
  (state: UserState) => state.loaded
);