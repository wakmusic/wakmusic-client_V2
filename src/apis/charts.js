import { instance } from "./axios";

const chartsURL = "/api/charts";

export const getCharts = async (params) => {
  const data = instance.get(`${chartsURL}`, { params: params });
  return data;
};

export const getUpdated = async () => {
  const data = instance.get(`${chartsURL}/updated`);
  return data;
};
