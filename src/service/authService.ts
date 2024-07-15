import { SignInDTO, User } from "@/models/user";
import data from "../../data/users-data.json";
import icons from "../../data/icons-data.json";
import { Question } from "@/models/question";
import { Icon } from "@/models/icon";

export const signIn = (dto: SignInDTO) => {
  const users = data.users;
  const found = users.find(
    (e) => e.user === dto.user && e.password === dto.password
  );

  if (!found) return null;

  const icon = icons.data.find((e) => e.id === found.icon.id);
  if (icon) found.icon = icon;

  localStorage.setItem("session", JSON.stringify(found));
  return found;
};

export const isLogged = () => {
  const data = localStorage.getItem("session");
  return data != null;
};

export const verifyInfo = (icon: Icon, question: Question) => {
  const session = localStorage.getItem("session");
  const user: User = JSON.parse(session!);

  if (icon.id !== user.icon.id) return false;

  const userQuestion = user.questions.find((e) => e.questionId === question.id);
  console.log("UUU", user.questions, question);

  if (userQuestion.answer.toUpperCase() !== question.answer?.toUpperCase())
    return false;
  return true;
};
