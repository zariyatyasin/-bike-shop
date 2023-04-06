import React from "react";

const RecentOrders = () => {
  return (
    <div className="  ">
      <div className="p-4 font-bold">Recent orders</div>
      <div className="h-60 overflow-scroll">
        <table className="  w-full text-sm text-left text-gray-500 overflow-scroll  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50    ">
            <tr>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                EMAIL
              </th>

              <th scope="col" className="px-6 py-3">
                VIEW
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b   hover:bg-gray-50  ">
              <td className="px-6 py-4">{"Anaika"}</td>
              <td className="px-6 py-4">{"anika@gmail"}</td>

              <td className="px-6 py-4">
                <div className="font-medium text-blue-600   hover:underline">
                  View
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b   hover:bg-gray-50  ">
              <td className="px-6 py-4">{"Anaika"}</td>
              <td className="px-6 py-4">{"anika@gmail"}</td>

              <td className="px-6 py-4">
                <div className="font-medium text-blue-600   hover:underline">
                  View
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b   hover:bg-gray-50  ">
              <td className="px-6 py-4">{"Anaika"}</td>
              <td className="px-6 py-4">{"anika@gmail"}</td>

              <td className="px-6 py-4">
                <div className="font-medium text-blue-600   hover:underline">
                  View
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b   hover:bg-gray-50  ">
              <td className="px-6 py-4">{"Anaika"}</td>
              <td className="px-6 py-4">{"anika@gmail"}</td>

              <td className="px-6 py-4">
                <div className="font-medium text-blue-600   hover:underline">
                  View
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b   hover:bg-gray-50  ">
              <td className="px-6 py-4">{"Anaika"}</td>
              <td className="px-6 py-4">{"anika@gmail"}</td>

              <td className="px-6 py-4">
                <div className="font-medium text-blue-600   hover:underline">
                  View
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
