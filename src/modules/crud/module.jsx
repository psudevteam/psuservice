import { Button, Modal, TextField, SelectField } from "@/components";
import { Fragment, Suspense, useEffect } from "react";
import { LoadingCrud } from "./loading";
import { TableHead, TableBody } from "./section";
import { ErrorCrud } from "./error";
import { ErrorBoundary } from "react-error-boundary";
import {
  useCrudCreate,
  useCrudDelete,
  useCrudModal,
  useCrudUpdate,
  useEditData,
  useOnCrudDelete,
  useOnCrudEdit,
} from "./hook";
import { useForm } from "react-hook-form";

export const CrudModule = () => {
  const { setEdit, getEdit } = useOnCrudEdit();
  const { setDelete, getDelete } = useOnCrudDelete();
  const { getModal, setModal } = useCrudModal();
  const { getEditData, setEditData } = useEditData();

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      nama: "",
      kelas: "",
      prodi: "",
      semester: "",
      wa: "",
    },
  });

  const { mutate: createCrud } = useCrudCreate();
  const { mutate: updateCrud } = useCrudUpdate();
  const { mutate: deleteCrud } = useCrudDelete();

  const onAddData = () => {
    setModal(true);
    setEdit(false);
    setDelete(false);
    setEditData({});
    reset({});
  };

  const onSubmit = handleSubmit(async (data) => {
    getEdit
      ? updateCrud(data, {
          onSuccess: () => {
            setModal(false);
            setEdit(false);
            setDelete(false);
          },
        })
      : getDelete
      ? deleteCrud(data, {
          onSuccess: async () => {
            setModal(false);
            setEdit(false);
            setDelete(false);
          },
        })
      : createCrud(data, {
          onSuccess: async () => {
            setModal(false);
            setEdit(false);
            setDelete(false);
          },
        });
  });

  const onClose = () => {
    setModal(false);
    setEdit(false);
    setDelete(false);
    setEditData({});
    reset({});
  };

  useEffect(() => {
    (getEdit || getDelete) && reset(getEditData);
  }, [getEdit, getEditData, getDelete, reset]);

  return (
    <div className="flex gap-y-4 flex-col overflow-x-auto w-full px-10 justify-center">
      <Modal
        onClose={onClose}
        onSubmit={onSubmit}
        showModal={getModal}
        submitText={getEdit ? "Edit Data" : getDelete ? "Hapus Data" : "Tambah Data"}
        closeText="Batal"
        modalTitle={getEdit ? "Edit Data" : getDelete ? "Hapus Data" : "Tambah Data"}
      >
        <section className="flex flex-col gap-y-3">
          {getDelete ? (
            <span className="text-red-400 font-medium">
              Apakah anda yakin akan menghapus data {getEditData?.nama}
            </span>
          ) : (
            <Fragment>
              <TextField
                size="md"
                type="text"
                name="nama"
                control={control}
                label="Nama"
                placeholder="Masukkan Nama anda"
              />
              <SelectField
                size="md"
                type="text"
                name="kelas"
                control={control}
                label="Kelas"
                placeholder="Masukkan Kelas Anda"
                options={[
                  {
                    label: "A1",
                    value: "A1",
                  },
                  {
                    label: "A2",
                    value: "A2",
                  },
                  {
                    label: "A3",
                    value: "A3",
                  },
                ]}
              />
              <SelectField
                size="md"
                type="text"
                name="prodi"
                control={control}
                label="Prodi"
                placeholder="Masukkan Prodi Anda"
                options={[
                  {
                    label: "Informatika",
                    value: "Informatika",
                  },
                  {
                    label: "Bahasa Inggris",
                    value: "Bahasa Inggris",
                  },
                  {
                    label: "Bahasa Indonesia",
                    value: "Bahasa Indonesia",
                  },
                ]}
              />
              <SelectField
                size="md"
                type="text"
                name="semester"
                control={control}
                label="Semester"
                placeholder="Masukkan Semester Anda"
                options={Array(14)
                  .fill()
                  .map((_, semester) => ({
                    label: semester + 1,
                    value: semester + 1,
                  }))}
              />
              <TextField
                size="md"
                type="number"
                name="wa"
                control={control}
                label="Nomor Whatsapp"
                placeholder="Masukkan No Whatsapp"
              />
            </Fragment>
          )}
        </section>
      </Modal>

      <div className="flex w-fit gap-x-4">
        <Button onClick={onAddData} size="sm">
          Tambah Data
        </Button>
      </div>

      <table className="w-full text-sm text-left items-center justify-center shadow-md border rounded-xl text-gray-500">
        <TableHead />
        <ErrorBoundary fallback={<ErrorCrud />}>
          <Suspense fallback={<LoadingCrud />}>
            <TableBody />
          </Suspense>
        </ErrorBoundary>
      </table>
    </div>
  );
};
