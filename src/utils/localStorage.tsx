import { User } from "../models/User";

export const saveUserToLocalStorage = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
