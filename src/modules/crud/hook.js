import { useMutation, useQuery } from "@tanstack/react-query";
import { crudDeleteRequest, crudPostRequest, crudPutRequest, crudRequest } from "./api";
import { useRecoilState } from "recoil";
import { dataEdit, modalCrud, onCrudDelete, onCrudEdit } from "./store";

export const useCrud = () =>
  useQuery({
    queryKey: ["get-crud"],
    queryFn: async () => crudRequest(),
  });

export const useOnCrudEdit = () => {
  const [get, set] = useRecoilState(onCrudEdit);
  return {
    getEdit: get,
    setEdit: (val) => set(val),
  };
};

export const useOnCrudDelete = () => {
  const [get, set] = useRecoilState(onCrudDelete);
  return {
    getDelete: get,
    setDelete: (val) => set(val),
  };
};

export const useCrudCreate = () => {
  return useMutation({
    mutationKey: ["create-crud-data"],
    mutationFn: async (payload) => await crudPostRequest(payload),
  });
};

export const useCrudUpdate = () => {
  return useMutation({
    mutationKey: ["update-crud-data"],
    mutationFn: async (payload) => await crudPutRequest(payload),
  });
};

export const useCrudDelete = () => {
  return useMutation({
    mutationKey: ["delete-crud-data"],
    mutationFn: async (payload) => await crudDeleteRequest(payload),
  });
};

export const useCrudModal = () => {
  const [get, set] = useRecoilState(modalCrud);
  return {
    getModal: get,
    setModal: (val) => set(val),
  };
};

export const useEditData = () => {
  const [get, set] = useRecoilState(dataEdit);
  return {
    getEditData: get,
    setEditData: (val) => set(val),
  };
};
