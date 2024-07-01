export interface User {
  id?: number;
  email: string;
  password_hash: string;
  verified: boolean;
  verificationCode?: string | null;
  createdAt: Date;
  username: string;
}