import { instance } from "./axios";

export const getTeam = async () => {
  const data = instance.get("/api/teams");
  return data;
};
