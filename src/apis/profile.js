import { instance } from "./axios";

export const setProfile = async (body) => {
  const data = instance("/api/user/profile/set", body);
  return data;
};
