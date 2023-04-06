import React from "react";
import { useSelector } from "react-redux";

const DashbordOverview = () => {
  const { currentUser } = useSelector((state) => state.LoginInUser);

  return (
    <div className="w-full  mx-2 rounded-md overflow-hidden border shadow-md">
      <div className="bg-white p-3    ">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="tracking-wide">Profile</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">Jane</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">Doe</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Gender</div>
              <div className="px-4 py-2">Female</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">+11 998001001</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Current Address</div>
              <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold"> Address</div>
              <div className="px-4 py-2">{currentUser.address}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email</div>
              <div className="px-4 py-2">
                <div className="text-blue-800">{currentUser.email}</div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Birthday</div>
              <div className="px-4 py-2">Feb 06, 1998</div>
            </div>
          </div>
        </div>
        <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg  p-3 my-4">
          Edit Information
        </button>
      </div>

      {/* <div>
        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
          <span clas="text-green-500"></span>
          <span class="tracking-wide">Order History</span>
        </div>
        <ul class="list-inside space-y-2">
          <li className="flex items-center">
            <img
              className="m-2 h-10 w-12 rounded-md   object-fill  "
              src="./image/bike.png"
              alt=""
            />
            <div className="flex w-full flex-col px-4 py-4">
              <span className="text-teal-600 ">Yamha R1 v3 Indo</span>
              <span className=" text-gray-500 text-xs">1 x $58,985</span>
            </div>
          </li>
          <li className="flex items-center">
            <img
              className="m-2 h-10 w-12 rounded-md   object-fill  "
              src="./image/bike2.png"
              alt=""
            />
            <div className="flex w-full flex-col px-4 py-4">
              <span className="text-teal-600 ">Yamha R1 v3 Indo</span>
              <span className=" text-gray-500 text-xs">1 x $58,985</span>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default DashbordOverview;
