import { instance } from "./axios";

const playlistURL = "/api/playlist";

export const fetchPlaylist = async (id) => {
  const data = instance.get(`${playlistURL}/${id}`);
  return data;
};

export const deletePlaylist = async (key) => {
  const data = instance.delete(`${playlistURL}/${key}/delete`);
  return data;
};

export const postPlaylist = async (body) => {
  const data = instance.post(`${playlistURL}/create`, body);
  return data;
};

export const removeSubscriberPlaylist = async (key, body) => {
  const data = instance.patch(`${playlistURL}/${key}/removeSubscriber`, body);
  return data;
};

export const detailPlaylist = async (key) => {
  const data = instance.get(`${playlistURL}/${key}/detail`);
  return data;
};

export const editPlaylist = async (key, body) => {
  const data = instance.patch(`${playlistURL}/${key}/edit`, body);
  return data;
};

export const addToMyPlaylist = async (key) => {
  const data = instance.post(`${playlistURL}/${key}/addToMyPlaylist`);
  return data;
};
