import { Role } from "./role.enum";

export interface NewUser {
  id: number,
  username: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  phone: string,
  role: Role

}
