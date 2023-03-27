import { instance } from "./axios";

const artistURL = "/api/artist";

export const getArtistAlbums = async (params) => {
  const data = instance.get(`${artistURL}/albums`, { params: params });
  return data;
};

export const getArtistList = async () => {
  const data = instance.get(`${artistURL}/list`);
  return data;
};
