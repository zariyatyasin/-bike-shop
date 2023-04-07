import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogOut } from "../../Redux/UserReducer/UserSlice";

const ProfileDropDown = ({ currentUser }) => {
  const [avater, setAvater] = useState(true);
  const dispatch = useDispatch();

  return (
    <div className="  ">
      <button
        className="flex   h-16 items-center text-sm font-medium text-gray-900  hover:text-prange-600 dark:hover:text-orange-500 md:mr-0   dark:focus:ring-gray-700 dark:text-orange-600"
        type="button"
        onMouseEnter={() => setAvater(false)}
        onMouseLeave={() => setAvater(true)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 md:mr-2 object-cover rounded-full"
          src="/image/bikeBG/bg.jpg"
          alt="user "
        />
        <span className="hidden md:block">{currentUser?.username}</span>
      </button>

      <div
        id="dropdownAvatarName"
        onMouseEnter={() => setAvater(false)}
        onMouseLeave={() => setAvater(true)}
        className={`z-10 ${
          avater && "hidden"
        } absolute top-16 h-46  right-8  bg-[#1A1A1A] divide-y divide-gray-100 rounded shadow w-44  `}
      >
        <div className="px-4 py-3 text-sm  text-white  ">
          <div className="font-medium ">Welcome Back</div>
          <div className="truncate">{currentUser?.email}</div>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            {currentUser?.isAdmin ? (
              <Link
                to={"/admin/dashboard"}
                className="block px-4 py-2 hover:bg-[#202020] text-gray-50 cursor-pointer"
              >
                Admin Dashboard
              </Link>
            ) : (
              <Link
                to={"/profile/userprofile"}
                className="block px-4 py-2 hover:bg-[#202020] text-gray-50 cursor-pointer"
              >
                Profile
              </Link>
            )}
          </li>
          {!currentUser?.isAdmin && (
            <li>
              <Link to={"/profile/userorder"}>
                <div className="block px-4 py-2 hover:bg-[#202020] text-gray-50 cursor-pointer">
                  My order
                </div>
              </Link>
            </li>
          )}
          {!currentUser?.isAdmin && (
            <li>
              <Link>
                <div className="block px-4 py-2 hover:bg-[#202020] text-gray-50 cursor-pointer">
                  Setting
                </div>
              </Link>
            </li>
          )}
        </ul>
        <div className="py-1">
          <div
            className="block px-4 py-2 text-sm   hover:bg-[#202020]   text-gray-50 cursor-pointer"
            onClick={() => dispatch(userLogOut())}
          >
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
