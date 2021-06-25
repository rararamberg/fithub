import api from "./api-config";

export const getAllStudios = async () => {
  const resp = await api.get("/studios");
  return resp.data;
};

export const getOneStudio = async (id) => {
  const resp = await api.get(`/studios/${id}`);
  return resp.data;
};

export const postStudio = async (studioData) => {
  const resp = await api.post("/studios", { studio: studioData });
  return resp.data;
};

export const putStudio = async (id, studioData) => {
  const resp = await api.put(`/studios/${id}`, { studio: studioData });
  return resp.data;
};

//  do i need to pass any id of studio or user??
export const getUserStudio = async () => {
  const resp = await api.get("/users/studios");
  return resp.data;
};
