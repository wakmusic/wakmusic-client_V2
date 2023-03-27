import { instance } from "./axios";

const authURL = "/api/auth";

export const fetchUserInfo = async () => {
  const data = instance.get(`${authURL}`);
  return data;
};
