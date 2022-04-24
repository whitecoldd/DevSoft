import { Member } from "./member.model";

export interface LoginResponse {
  member?: Member,
  validationError: boolean
}
