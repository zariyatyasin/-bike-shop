import React from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import DashboardCard from "./DashboardCard";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { LineChart } from "./LineChart";
import NewUserTable from "./NewUserTable";
import RecentOrders from "./RecentOrders";
import AdminTranList from "./AdminTranList";
import AdminJust from "./AdminJust";
import AdminList2 from "./AdminList2";
import { AdminCard } from "./AdminCard";
const AdminDashboard = () => {
  const { currentUser } = useSelector((state) => state.LoginInUser);
  return (
    <div className=" max-w-xl  md:max-w-7xl  mx-auto">
      <div className="text-2xl font-medium uppercase">Dashboard</div>
      <p className=" text-sm">Welcome to your Dashboard</p>
      <div className=" ">
        <AdminCard />
      </div>
      <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-row-5  gap-4 lg:grid-cols-11     mt-5">
        <div className="col-span-2 md:col-start-1 md:col-end-2 lg:col-span-2  ">
          <DashboardCard
            title={"Total Customers"}
            value={"4,580"}
            per={"12"}
            des={"Since last month"}
            icon={<PeopleOutlineIcon />}
          ></DashboardCard>
        </div>
        <div className="col-span-2 md:col-start-2 md:col-end-3 md: lg:col-span-2 ">
          <DashboardCard
            title={"Total Sale"}
            value={"48,8595 tk"}
            per={"18"}
            des={"Since last month"}
            icon={<MonetizationOnOutlinedIcon />}
          ></DashboardCard>
        </div>
        <div className=" col-span-2 md:col-start-1 md:col-end-2 lg:col-span-2 lg:row-start-2">
          <DashboardCard
            title={"Pending order"}
            value={"5"}
            per={"12"}
            des={"Since last month"}
            icon={<PendingActionsOutlinedIcon />}
          ></DashboardCard>
        </div>

        <div className=" col-span-2  md:col-start-2 md:col-end-3 lg:col-span-2  lg:row-start-2 ">
          <DashboardCard
            title={"Total Order"}
            value={"80"}
            per={"12"}
            des={"Since last month"}
            icon={<ReceiptOutlinedIcon />}
          ></DashboardCard>
        </div>
        <div className=" col-span-2 lg:col-start-5 lg:col-end-12 lg:row-start-1 lg:row-end-3  rounded shadow-md border      bg-white">
          <LineChart></LineChart>
        </div>
        <div className=" rounded col-span-2 lg:col-start-1 lg:col-end-4 shadow-md border bg-white">
          <AdminList2 />
        </div>
        <div className=" rounded col-span-2 lg:col-start-4 lg:col-end-12 shadow-md border bg-white">
          <AdminTranList />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
