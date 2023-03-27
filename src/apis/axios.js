import axios from "axios";

export const instance = axios.create({
  baseURL: `https://test.wakmusic.xyz`,
  timeout: 10000,
});
