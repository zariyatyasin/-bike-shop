import React, { useState } from "react";
import DashbordOverview from "./DashBoardList/DashbordOverview";
import ProfileUpdate from "./DashBoardList/ProfileUpdate";
import DashboardSidebar from "./DashboardSidebar";
import AcountMenuMobile from "./AcountMenuMobile";
import { useParams } from "react-router-dom";
import UserOrderPage from "./DashBoardList/UserOrderPage";
const Dashboard = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(id);

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
      <div className=" mt-5 md:hidden ">
        <AcountMenuMobile></AcountMenuMobile>
      </div>
      <div className="hidden md:flex mt-5">
        <DashboardSidebar take={take}></DashboardSidebar>
        {data === "userprofile" && <DashbordOverview></DashbordOverview>}
        {data === "userorder" && <UserOrderPage></UserOrderPage>}
        {data === "tab6" && <ProfileUpdate></ProfileUpdate>}
      </div>
    </div>
  );
};

export default Dashboard;
