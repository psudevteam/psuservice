import { useCrud, useCrudModal, useEditData, useOnCrudDelete, useOnCrudEdit } from "@/modules";

export const TableBody = () => {
  const { data } = useCrud();
  const { setModal } = useCrudModal();
  const { setEdit } = useOnCrudEdit();
  const { setDelete } = useOnCrudDelete();
  const { setEditData } = useEditData();

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
    <tbody>
      {data?.data?.map((item, key) => (
        <tr key={key} className="bg-white border-b">
          <td className="w-auto p-4">{key + 1}</td>
          <td className="w-auto p-4">{item?.nama || "Tidak Ada Data"}</td>
          <td className="w-auto p-4">{item?.kelas || "Tidak Ada Data"}</td>
          <td className="w-auto p-4">{item?.prodi || "Tidak Ada Data"}</td>
          <td className="w-auto p-4">{item?.semester || "Tidak Ada Data"}</td>
          <td className="w-auto p-4">{item?.wa || "Tidak Ada Data"}</td>
          <td className="w-auto gap-x-2 cursor-pointer flex p-4 justify-end">
            <span onClick={() => onEdit(item)} className="text-green-400">
              Edit
            </span>
            <span>|</span>
            <span onClick={() => onDelete(item)} className="text-red-400">
              Hapus
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
