import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { crudDeleteRequest, crudPostRequest, crudPutRequest, crudRequest } from "./api";
import { useRecoilState } from "recoil";
import { dataEdit, modalCrud, onCrudDelete, onCrudEdit, refetchData } from "./store";

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
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-crud-data"],
    mutationFn: async (payload) => await crudPostRequest(payload),
    onSuccess: () =>
      setTimeout(async () => {
        await queryClient.refetchQueries({
          queryKey: "get-crud",
        });
      }, 500),
  });
};

export const useCrudUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-crud-data"],
    mutationFn: async (payload) => await crudPutRequest(payload),
    onSuccess: async () =>
      setTimeout(async () => {
        await queryClient.refetchQueries({
          queryKey: "get-crud",
        });
      }, 500),
  });
};

export const useCrudDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-crud-data"],
    mutationFn: async (payload) => await crudDeleteRequest(payload),
    onSuccess: async () =>
      setTimeout(async () => {
        await queryClient.refetchQueries({
          queryKey: "get-crud",
        });
      }, 500),
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

export const useRefetchData = () => {
  const [get, set] = useRecoilState(refetchData);
  return {
    getRefetch: get,
    setRefetch: (val) => set(val),
  };
};
