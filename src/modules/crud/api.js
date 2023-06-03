import { api } from "@/service";

export const crudRequest = async () => {
  const { data } = await api.get("/reads");
  return data;
};

export const crudPostRequest = async (payload) => {
  const { data } = api.post("/create", payload);
  return data;
};

export const crudPutRequest = async (payload) => {
  const { data } = api.put("/update/" + payload?.id, payload);
  return data;
};

export const crudDeleteRequest = async (payload) => {
  const { data } = api.delete("/delete/" + payload?.id);
  return data;
};
