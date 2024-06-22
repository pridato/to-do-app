import { User } from "./user";

export interface RestMessage {
  message: string;
  datos: User;
  error: string | null;
  otherData: any;
  token?: string;
}