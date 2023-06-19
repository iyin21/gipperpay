import React from "react";

/* type BaseTableProps = {
 *   headers: { id: string; name: ReactNode }[];
 *   data: Array<Record<string, ReactNode>>;
 *   onRowClick?: (rowId: string) => void;
 * };
 */

export function BaseTable(props) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full rounded-xl min-w-[600px]">
        <thead>
          <tr className="text-gray-600 text-left px-2 rounded-t-xl border-b">
            {props.headers.map((header) => (
              <th key={header.id} className="py-3 font-medium">
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr
              className={`bg-white rounded-md border-b last:border-none text-[#7B7B7B] font-regular ${
                props.onRowClick ? "cursor-pointer" : ""
              }`}
              key={row.id?.toString()}
            >
              {props.headers.map((header) => (
                <td
                  key={header.id}
                  className="py-6"
                  onClick={() =>
                    header.id !== "action"
                      ? props.onRowClick &&
                        props.onRowClick(row.id?.toString() || "")
                      : null
                  }
                >
                  {row[header.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
