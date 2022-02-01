export const USERS_FEATURE_KEY = 'users';
import { User } from 'src/app/models/interface';

export interface UserState {
  users: User[];
  loaded: boolean;
  error?: string | null;
}

export const initialUserState: UserState = {
  users: [],
  loaded: false,
  error: null,
};