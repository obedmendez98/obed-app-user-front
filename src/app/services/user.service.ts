import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DataResponse, DataResponseAdd, DataResponseDelete, DataResponseUpdate } from '../interfaces/data.interface';
import { User } from '../models/interface';
import { ADD_USER, DELETE_USERS, REED_FILTER_USERS, REED_USERS, UPDATE_USER } from '../resolvers/user.graphql'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(
    private apollo: Apollo
  ){
    //this.getDataAPI()
    
  }

  getDataAPI(){
    return this.apollo.watchQuery<DataResponse>({
      query: REED_USERS
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => data.getAllUsers)
    )
  }

  addUser(item:User){
    return this.apollo.mutate<DataResponseAdd>({
      mutation: ADD_USER,
      variables: {
        ...item
      }
    }).pipe(
      take(1),
      tap(({data}) => {
        console.log(data)
      })
    )
  }

  updateUser(item:User,id:number){
    console.log(item)
    console.log(id)
    return this.apollo.mutate<DataResponseUpdate>({
      mutation: UPDATE_USER,
      variables: {
        ...item,
        id
      }
    }).pipe(
      take(1),
      tap(({data}) => {
        console.log(data)
      })
    )
  }

  deleteUser(id:number){
    return this.apollo.mutate<DataResponseDelete>({
      mutation: DELETE_USERS,
      variables: {
        id:id
      }
    }).pipe(
      take(1),
      tap(({data}) => {
        console.log(data)
      })
    )
  }

  getDataFilter(filter:string){
    return this.apollo.watchQuery<DataResponse>({
      query: REED_FILTER_USERS,
      variables: {
        filter: filter
      },
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => data.getAllUsers)
    )
  }

}