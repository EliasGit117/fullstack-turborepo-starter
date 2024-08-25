export class UserDto {
  id: number;
  role: UserRole;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

export enum UserRole {
  user = "user",
  admin = "admin",
}
