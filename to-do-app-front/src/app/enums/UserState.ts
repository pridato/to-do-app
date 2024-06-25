import { User } from "../model/user";

export interface UserState {
  user: User | null;
  addUser: (user: User) => void;
  removeUser: () => void;
}