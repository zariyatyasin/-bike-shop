import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
  deleteProduct,
  fetchAllProduct,
} from "../../Redux/GetAllProductReducer/GetAllProductLSlice";
import { useNavigate } from "react-router-dom";
const AdminProductList = () => {
  const { AllProduct } = useSelector((state) => state.GetALLProduct);
  console.log(AllProduct);
  const dispatch = useDispatch();
  const [filters, setFilter] = useState([]);
  const [catId, setCatId] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchAllProduct({ catId, filters }));
  }, [dispatch, catId, filters]);

  const deleteHandler = (id) => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <div>
      <div className="flex justify-between items-start">
        <div className=" text-2xl mb-5 font-medium">Products List</div>
        <div
          className=" text-white right-2.5 bottom-2.5 bg-[#ffa23c] font-medium  text-sm px-4 py-2 cursor-pointer"
          onClick={() => navigate("/admin/uploadproduct")}
        >
          New Product
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md  ">
        <form className=" mb-2">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only  ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm focus:outline-0 text-gray-900 border border-gray-300 rounded-  bg-gray-50  "
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-[#ffa23c]   font-medium rounded text-sm px-4 py-2  "
            >
              Search
            </button>
          </div>
        </form>
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                product
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Category
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Stock
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {AllProduct?.map((item, id) => (
              <tr className="hover:bg-gray-50" key={id}>
                <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={item?.images?.url}
                      alt=""
                    />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">{item.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold ${
                        item.countInStock !== 0
                          ? "text-blue-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.countInStock}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">{item.price} TK</td>

                <td className="px-6 py-4">
                  <div className="flex   gap-2">
                    <div onClick={() => deleteHandler(item._id)}>
                      <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                    </div>
                    <div>
                      <ModeEditOutlineOutlinedIcon />
                    </div>
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

export default AdminProductList;
