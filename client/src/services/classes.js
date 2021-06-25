import api from "./api-config";

export const postFitClass = async (fitClassData) => {
  const resp = await api.post("/fit_classes", { fit_class: fitClassData });
  return resp.data;
};

export const putFitClass = async (id, fitClassData) => {
  const resp = await api.put(`/fit_classes/${id}`, { fit_class: fitClassData });
  return resp.data;
};

// make into try catch?
export const deleteFitClass = async (id) => {
  const resp = await api.delete(`/fit_classes/${id}`);
  return resp;
};

// PMVP
// export const addClassStudent = async (userId, fitClassId) => {
//   const resp = await api.put(`users/${userId}/fit_classes/${fitClassId}`);
//   return resp.data;
// };
