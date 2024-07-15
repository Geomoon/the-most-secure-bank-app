import { Icon } from "./icon";
import { Question } from "./question";

export interface User {
  id: string;
  user: string;
  password: string;
  questions: any[];
  icon: any;
}

export type SignInDTO = Pick<User, "user" | "password">;
