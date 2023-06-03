import { Button, Modal, TextField, SelectField, Table } from "@/components";
import { Fragment, useEffect, useMemo } from "react";
import {
  useCrud,
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

  const { data, isLoading } = useCrud();

  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      nama: "",
      kelas: "",
      prodi: "",
      semester: "",
      wa: "",
    },
  });

  const { control: searchControl } = useForm({
    defaultValues: {
      search: "",
      filter_semester: "",
      filter_kelas: "",
      filter_prodi: "",
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

  const columns = useMemo(
    () => [
      {
        header: () => "No",
        cell: ({ row }) => row.index + 1,
        accessorKey: "no",
      },
      {
        header: () => "Nama",
        cell: (row) => row.renderValue(),
        accessorKey: "nama",
      },
      {
        header: () => "Kelas",
        cell: (row) => row.renderValue(),
        accessorKey: "kelas",
      },
      {
        header: () => "Prodi",
        cell: (row) => row.renderValue(),
        accessorKey: "prodi",
      },
      {
        header: () => "Semester",
        cell: (row) => row.renderValue(),
        accessorKey: "semester",
      },
      {
        header: () => "No Whatsapp",
        cell: (row) => row.renderValue(),
        accessorKey: "wa",
      },
      {
        header: "Aksi",
        cell: ({ row }) => {
          const onEdit = (data) => {
            setModal(true);
            setEdit(true);
            setEditData(data);
          };

          const onDelete = (data) => {
            setModal(true);
            setDelete(true);
            setEdit(false);
            setEditData(data);
          };
          return (
            <div className="flex gap-x-2">
              <span onClick={() => onEdit(row.original)} className="text-green-400">
                Edit
              </span>
              <span>|</span>
              <span onClick={() => onDelete(row.original)} className="text-red-400">
                Hapus
              </span>
            </div>
          );
        },
        accessorKey: "aksi",
      },
    ],
    [setDelete, setEdit, setEditData, setModal],
  );

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

      <div className="flex w-full items-center justify-between gap-x-4">
        <div className="flex w-fit">
          <Button onClick={onAddData} size="sm">
            Tambah Data
          </Button>
        </div>
        <div className="flex w-auto gap-x-3">
          <TextField
            control={searchControl}
            size="sm"
            type="text"
            name="search"
            placeholder="Cari Data..."
            append="Anjay"
          />
          <SelectField
            size="sm"
            type="text"
            name="filter_semester"
            control={searchControl}
            placeholder="Filter Semester"
            options={Array(14)
              .fill()
              .map((_, semester) => ({
                label: semester + 1,
                value: semester + 1,
              }))}
          />
          <SelectField
            size="sm"
            type="text"
            name="filter_prodi"
            control={searchControl}
            placeholder="Filter Prodi"
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
            size="sm"
            type="text"
            name="filter_kelas"
            control={control}
            placeholder="Filter Kelas"
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
        </div>
      </div>
      <Table data={data?.data} columns={columns} loading={isLoading} />
    </div>
  );
};
