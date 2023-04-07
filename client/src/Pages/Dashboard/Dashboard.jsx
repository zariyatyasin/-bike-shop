import React, { useEffect, useState } from "react";
import DashbordOverview from "./DashBoardList/DashbordOverview";
import ProfileUpdate from "./DashBoardList/ProfileUpdate";
import DashboardSidebar from "./DashboardSidebar";
import AcountMenuMobile from "./AcountMenuMobile";
import { useParams } from "react-router-dom";
import UserOrderPage from "./DashBoardList/UserOrderPage";

const Dashboard = () => {
  const { id } = useParams();
  console.log("this si", id);
  const [data, setData] = useState("userprofile"); // Initialize with "userprofile"

  const take = (e) => {
    setData(e);
  };

  return (
    <div className=" max-w-screen-xl mx-auto ">
      <div className="h-28 bg-orange-600 px-2">
        <h3 className=" ml-4  text-white   flex items-center h-full       text-[40px]    font-extrabold     ">
          Account
        </h3>
      </div>
      {/* <div className=" mt-5 md:hidden ">
        <AcountMenuMobile></AcountMenuMobile>
      </div> */}
      <div className="flex mt-5">
        <div className="hidden md:flex">
          <DashboardSidebar take={take}></DashboardSidebar>
        </div>
        {id === "userprofile" && <DashbordOverview></DashbordOverview>}
        {id === "userorder" && <UserOrderPage></UserOrderPage>}
        {id === "useredit" && <ProfileUpdate></ProfileUpdate>}
      </div>
    </div>
  );
};

export default Dashboard;
