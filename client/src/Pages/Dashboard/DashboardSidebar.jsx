import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmailIcon from "@mui/icons-material/Email";
import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import "../../Style/global.css";
import { Link, useParams } from "react-router-dom";

const DashboardSidebar = ({ take }) => {
  const { id } = useParams();
  const [activeMenu, setActiveMenu] = useState(id);
  useEffect(() => {
    take(activeMenu);
  }, [activeMenu]);
  return (
    <div>
      <aside className="w-48  border rounded-md shadow-md">
        <div className="px-3 py-4 overflow-y-auto    ">
          <ul className="space-y-2">
            <Link
              to={"/profile/userprofile"}
              className={` ${
                activeMenu === "userprofile" ? "activeProfile" : " "
              } cursor-pointer hover:bg-slate-100`}
              onClick={() => setActiveMenu("userprofile")}
            >
              <div className="flex items-center  p-2 text-base font-normal border-b  text-black rounded-lg ">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 00 group-hover:text-black :text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Profile</span>
              </div>
            </Link>
            <Link
              to={"/profile/userorder"}
              className={` ${
                activeMenu === "userorder" ? "activeProfile" : " "
              } cursor-pointer hover:bg-slate-100`}
              onClick={() => setActiveMenu("userorder")}
            >
              <div className="flex items-center p-2 text-base font-normal border-b  text-black rounded-lg ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 00 group-hover:text-black :text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">My Order</span>
              </div>
            </Link>
            <li
              className={` ${
                activeMenu === "tab3" ? "activeProfile" : " "
              } cursor-pointer hover:bg-slate-100`}
              onClick={() => setActiveMenu("tab3")}
            >
              <div className="flex items-center p-2 text-base font-normal border-b text-gray-500 rounded-lg ">
                <EmailIcon></EmailIcon>
                <span className="flex-1 ml-3 whitespace-nowrap text-black ">
                  Messages
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full  00">
                  3
                </span>
              </div>
            </li>
            <li
              className={` ${
                activeMenu === "tab4" ? "activeProfile" : " "
              } cursor-pointer hover:bg-slate-100`}
              onClick={() => setActiveMenu("tab4")}
            >
              <div className="flex items-center p-2 text-base font-normal border-b text-gray-500   rounded-lg ">
                <FavoriteIcon></FavoriteIcon>
                <span className="flex-1 ml-3 whitespace-nowrap text-black">
                  My Wishlist
                </span>
              </div>
            </li>
            <li
              className={` ${
                activeMenu === "tab5" ? "activeProfile" : " "
              } cursor-pointer hover:bg-slate-100`}
              onClick={() => setActiveMenu("tab5")}
            >
              <div className="flex items-center p-2 text-base font-normal border-b text-gray-500   rounded-lg ">
                <ReviewsIcon></ReviewsIcon>
                <span className="flex-1 ml-3 whitespace-nowrap text-black">
                  My Reviews
                </span>
              </div>
            </li>
            <li
              className={` ${
                activeMenu === "tab6" ? "activeProfile" : " "
              } cursor-pointer hover:bg-slate-100`}
              onClick={() => setActiveMenu("tab6")}
            >
              <div className="flex items-center p-2 text-base font-normal border-b text-gray-500   rounded-lg ">
                <EditIcon></EditIcon>
                <span className="flex-1 ml-3 whitespace-nowrap text-black">
                  Edit
                </span>
              </div>
            </li>
            <li
              className={` ${
                activeMenu === "tab7" ? "activeProfile" : " "
              } cursor-pointer hover:bg-slate-100`}
              onClick={() => setActiveMenu("tab7")}
            >
              <div className="flex items-center p-2 text-base font-normal border-b text-gray-500   rounded-lg ">
                <InfoIcon></InfoIcon>
                <span className="flex-1 ml-3 whitespace-nowrap text-black">
                  Help
                </span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardSidebar;
