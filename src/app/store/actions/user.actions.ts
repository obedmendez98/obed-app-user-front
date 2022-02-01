import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/interface';

export enum UserActionsNames {
  Init = '[User] Init',
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
  AddUsers = '[User] Add User',
  AddUserSuccess = '[User] Add User Success',
  AddUserFailure = '[User] Add User Failure',
  UpdateUsers = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserFailure = '[User] Update User Failure',
  DeleteUsers = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserFailure = '[User] Delete User Failure',
}

export const Init = createAction(UserActionsNames.Init);

export const LoadUsers = createAction(UserActionsNames.LoadUsers);

export const LoadUsersSuccess = createAction(
  UserActionsNames.LoadUsersSuccess,
  props<{ users: User[] }>() 
);

export const LoadUsersFailure = createAction(
  UserActionsNames.LoadUsersFailure,
  props<{ error: string | null }>()
);

export const AddUser = createAction(
  UserActionsNames.AddUsers,
  props<{ data: User }>()
);

export const AddUserSuccess = createAction(
  UserActionsNames.AddUserSuccess,
  props<{ users: User[] }>()
);

export const AddUserFailure = createAction(
  UserActionsNames.AddUserFailure,
  props<{ error: string | null }>()
);

export const DeleteUser = createAction(
  UserActionsNames.DeleteUsers,
  props<{ id: number }>()
);

export const DeleteUserSuccess = createAction(
  UserActionsNames.DeleteUserSuccess,
  props<{ users: User[] }>()
);

export const DeleteUserFailure = createAction(
  UserActionsNames.DeleteUserFailure,
  props<{ error: string | null }>()
);

export const UpdateUser = createAction(
  UserActionsNames.UpdateUsers,
  props<{ data: User, id:number }>()
);

export const UpdateUserSuccess = createAction(
  UserActionsNames.UpdateUserSuccess,
  props<{ users: User[] }>()
);

export const UpdateUserFailure = createAction(
  UserActionsNames.AddUserFailure,
  props<{ error: string | null }>()
);