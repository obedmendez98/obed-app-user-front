import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as userSelectors from './selectors/user.selectors';
import * as userActions from './actions/user.actions';
import { User } from '../models/interface';
import { UserState } from './state/user.state';

@Injectable()
export class UserFacade {

  public loaded$: Observable<boolean> = this.store.pipe(
    select(userSelectors.getUsersLoaded)
  );

  public ll$: Observable<boolean> = this.store.pipe(
    select(userSelectors.ll)
  );

  public readonly allUsers$: Observable<User[]> = this.store.pipe(
    select(userSelectors.getAllUsers)
  );

  constructor(private readonly store: Store<UserState>) {}
  public init(): void {
    this.store.dispatch(userActions.Init());
  }
  public loadUsers(): void {
    this.store.dispatch(userActions.LoadUsers());
  }
  
  public addUser(user: User): void {
    this.store.dispatch(userActions.AddUser({ data: user }));
  }

  public updateUser(user: User, id:any): void {
    this.store.dispatch(userActions.UpdateUser({ data: user, id:parseInt(id) }));
  }

  public deleteUser(id: number): void {
    this.store.dispatch(userActions.DeleteUser({ id }));
  }
}