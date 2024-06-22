export interface User {
  id: number;
  email: string;
  passwordHash: string;
  verified: boolean;
  verificationCode?: string | null;
  createdAt: Date;
  username: string;
}