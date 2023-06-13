import { atom } from "recoil";

export const onCrudEdit = atom({
  key: "on-crud-edit",
  default: false,
});

export const onCrudDelete = atom({
  key: "on-crud-delete",
  default: false,
});

export const modalCrud = atom({
  key: "modal-crud",
  default: false,
});

export const dataEdit = atom({
  key: "data-edit",
  default: {},
});
