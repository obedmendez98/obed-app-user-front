import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import * as userActions from '../actions/user.actions';
import { UserActionsNames } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  
  constructor(
    private actions$: Actions,
    private userService: UserService
  ){}

  public readonly loadUsers$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActionsNames.LoadUsers),
      switchMap(() => this.userService.getDataAPI().pipe(
        map(users =>({
          type:'[User] Load Users Success',
          users:users.data.getAllUsers
        })),
        catchError((error: string | null) =>
          of(userActions.LoadUsersFailure({ error }))
        )
      )
      )
    );
  });
  
  public readonly loadAddUsers$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.AddUser),
      switchMap((action) => this.userService.addUser(action.data).pipe(
        map((users) =>({
          type:'[User] Add User Success',
          users:users.data?.addUser
        })),
        catchError((error: string | null) =>
          of(userActions.AddUserFailure({ error }))
        )
      )
      )
    );
  });

  public readonly loadUpdateUsers$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.UpdateUser),
      switchMap((action) => this.userService.updateUser(action.data, action.id).pipe(
        map((users) =>({
          type:'[User] Update User Success',
          users:users.data?.updateUser
        })),
        catchError((error: string | null) =>
          of(userActions.UpdateUserFailure({ error }))
        )
      )
      )
    );
  });

  public readonly loadDeleteUsers$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.DeleteUser),
      switchMap((action) => this.userService.deleteUser(action.id).pipe(
        map((users) =>({
          type:'[User] Delete User Success',
          users:users.data?.deleteUser
        })),
        catchError((error: string | null) =>
          of(userActions.DeleteUserFailure({ error }))
        )
      )
      )
    );
  });

}