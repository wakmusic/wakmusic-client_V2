import { instance } from "./axios";

export const fetchNews = async () => {
  const data = instance.get("/api/news");
  return data;
};
