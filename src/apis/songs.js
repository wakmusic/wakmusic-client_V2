import { instance } from "./axios";

const songsURL = "/api/songs";

export const getNewSongs = async () => {
  const data = instance.get(`${songsURL}/new/monthly`);
  return data;
};

export const getSongsList = async (params) => {
  const data = instance.get(`${songsURL}/list`, { params: params });
  return data;
};

export const getSearchSongs = async (params) => {
  const data = instance.get(`${songsURL}/search`, { params: params });
  return data;
};

export const getCheckLyrics = async (params) => {
  const data = instance.get(`${songsURL}/check-lyrics`, { params: params });
  return data;
};
