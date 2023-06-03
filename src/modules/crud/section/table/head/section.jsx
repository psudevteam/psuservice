export const TableHead = () => {
  return (
    <thead className="text-xs w-full text-blue-700 uppercase bg-blue-100 rounded-lg">
      <tr>
        <th scope="col" className="p-4">
          No
        </th>
        <th scope="col" className="p-4">
          Nama
        </th>

        <th scope="col" className="p-4">
          Kelas
        </th>
        <th scope="col" className="p-4">
          Prodi
        </th>
        <th scope="col" className="p-4">
          Semester
        </th>
        <th scope="col" className="p-4">
          No Whatsapp
        </th>
        <th scope="col" className="p-4 justify-end flex">
          Aksi
        </th>
      </tr>
    </thead>
  );
};
