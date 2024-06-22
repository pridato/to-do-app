import { User } from "./user";

export interface RestMessage {
  code: number;
  message: string;
  data: User;
  error: string | null;
  otherData: any;
  token?: string;
}