import { createReducer, on, Action } from '@ngrx/store';
import * as userActions from '../actions/user.actions';
import { initialUserState, UserState } from '../state/user.state';

const usersReducer = createReducer(
  initialUserState,
  on(userActions.Init, (state) => ({ ...state, loaded: false, error: null })),
  on(userActions.LoadUsers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(userActions.LoadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loaded: true,
    error: null,
  })),
  on(userActions.LoadUsersFailure, (state, { error }) => ({ ...state, error, loaded:true })),
  on(userActions.AddUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(userActions.AddUserSuccess, (state , { users }) => {
    return {
      ...state,
      users,
      loaded: true,
      error: null,
    };
  }),
  on(userActions.AddUserFailure, (state, { error }) => ({ ...state, error, loaded:true })),
  on(userActions.DeleteUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(userActions.DeleteUserSuccess, (state, { users }) => {
    console.log(users)
    return {
      ...state,
      users,
      loaded: true,
      error: null,
    };
  }),
  on(userActions.DeleteUserFailure, (state, { error }) => ({ ...state, error, loaded:true })),
  on(userActions.UpdateUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(userActions.UpdateUserSuccess, (state , { users }) => {
    return {
      ...state,
      users,
      loaded: true,
      error: null,
    };
  }),
  on(userActions.UpdateUserFailure, (state, { error }) => ({ ...state, error, loaded:true })),
);

export function reducer(state: UserState | undefined, action: Action) {
  return usersReducer(state, action);
}
