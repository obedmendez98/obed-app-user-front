import { User } from "../models/interface";

export interface APIResponse<T> {
  results: T;
}

export interface DataResponse {
  getAllUsers: APIResponse<User[]>
}

export interface DataResponseDelete {
  deleteUser: APIResponse<User[]>
}

export interface DataResponseAdd {
  addUser: APIResponse<User[]>
}

export interface DataResponseUpdate {
  updateUser: APIResponse<User[]>
}