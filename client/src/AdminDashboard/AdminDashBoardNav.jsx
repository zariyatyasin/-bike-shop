import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { SidebarOpen } from "../Redux/GobalState/GobalState";
import ProfileDropDown from "../Components/Navbar/ProfileDropDown";
export const AdminDashBoardNav = () => {
  const { OpenSidebar } = useSelector((state) => state.GlobalState);
  const { currentUser } = useSelector((state) => state.LoginInUser);
  const dispatch = useDispatch();
  return (
    <div
      className={`absolute top-0 left-0 right-0 w-full 
      bg-white border-b border-grey-200 h-16 border shadow-sm
      flex items-center justify-between  
      ${OpenSidebar ? "md:pl-64" : "md:pl-0"}`}
    >
      <div>
        <div
          className="pl-6 pr-4 text-2xl  cursor-pointer"
          onClick={() => dispatch(SidebarOpen())}
        >
          <MenuIcon></MenuIcon>
        </div>
      </div>

      <div className="pr-8">
        <ProfileDropDown currentUser={currentUser}></ProfileDropDown>
      </div>
    </div>
  );
};
