import React from "react";

const ProfileCard = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-md  ">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500   hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44  0"
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              <li>
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100    e">
                  Edit
                </div>
              </li>
              <li>
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100    e">
                  Export Data
                </div>
              </li>
              <li>
                <div className="block px-4 py-2 text-sm text-red-600 h     e">
                  Delete
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/image/bikeBG/bg.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900  ">
            {currentUser?.fullname}
          </h5>
          <span className="text-sm text-gray-500  ">Admin</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa23c] rounded-lg  ">
              Add friend
            </div>
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg  ">
              Message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
