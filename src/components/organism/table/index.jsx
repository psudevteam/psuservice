import { LoadingSpinner } from "@/components/atoms";
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";

export const Table = ({ data = [], columns, loading = false }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <section className="flex flex-col w-full">
      <table className="w-full text-sm text-left items-center justify-center shadow-md border rounded-xl text-gray-500">
        <thead className="text-xs w-full text-blue-700 uppercase bg-blue-100 rounded-lg">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="p-4" scope="col" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="w-auto border-b p-4" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length === 0 && !loading && (
        <div className="flex w-full items-center justify-center p-8">
          <span className="text-1xl text-gray-700 font-semibold">Data tidak ditemukan</span>
        </div>
      )}

      {loading && (
        <div className="flex w-full items-center justify-center p-8">
          <LoadingSpinner />
        </div>
      )}
    </section>
  );
};
