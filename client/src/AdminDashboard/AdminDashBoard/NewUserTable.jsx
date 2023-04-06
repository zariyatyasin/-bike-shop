import React, { useEffect, useState } from "react";
import axios from "axios";

const NewUserTable = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const token = JSON.parse(
        JSON.parse(localStorage.getItem("persist:root")).LoginInUser
      ).currentUser.accessToken;

      const config = {
        headers: {
          token: `Bearer ${token}`,
        },
      };
      const newUser = await axios.get(
        "http://localhost:5000/api/users/find/?new=true",
        config
      );
      setData(newUser.data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="  ">
      <div className="p-4 font-bold">New User</div>
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
            {data?.map((item, id) => (
              <tr className="bg-white border-b   hover:bg-gray-50  " key={id}>
                <td className="px-6 py-4">{item.fullname}</td>
                <td className="px-6 py-4">{item.email}</td>

                <td className="px-6 py-4">
                  <div className="font-medium text-blue-600   hover:underline">
                    View
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewUserTable;
