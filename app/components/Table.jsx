import React from "react";

function Table({ details }) {
  const keys = Object.keys(details);
  const values = Object.values(details);

  return (
    <div className="p-4">
      <div className="relative overflow-x-auto   mt-4  ">
        <table className="  mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {keys.map((item) => (
                <th scope="col" className="px-6 py-4">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {values.map((item) => (
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {item}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
