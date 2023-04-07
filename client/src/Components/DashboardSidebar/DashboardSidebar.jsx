import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SidebarOpen } from "../../Redux/GobalState/GobalState";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { AdminDashBoardNav } from "../../AdminDashboard/AdminDashBoardNav";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "../../Style/global.css";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
const DashboardSidebar = () => {
  const { OpenSidebar } = useSelector((state) => state.GlobalState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },

    {
      text: "Product",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Uploadproduct",
      icon: <PointOfSaleOutlined />,
    },

    {
      text: "Global",
      icon: <PublicOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },

    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];

  return (
    <div>
      <div className="w-full h-screen fixed top-0 left-0  z-40">
        <AdminDashBoardNav />
        <div
          className={`absolute top-0 left-0 h-screen  scrollbar overflow-y-scroll
          bg-white border-r border-grey-200 
          ${OpenSidebar ? "w-64" : "w-0"}`}
        >
          <div className="flex  items-center cursor-pointer relative justify-center   h-16 ">
            <div
              className={`  ${
                OpenSidebar ? "w-64" : "hidden"
              }  text-center text-2xl  font-bold text-[#ffa23c] `}
              onClick={() => navigate("/")}
            >
              R-Station
            </div>
            <div
              className=" absolute block md:hidden right-[20px] z-[1000]"
              onClick={() => dispatch(SidebarOpen())}
            >
              <ArrowCircleRightIcon />
            </div>
          </div>
          <div className="  flex-grow    border-t-2 ">
            <ul className="flex flex-col py-4 space-y-1  ">
              {navItems.map((item, id) => (
                <li key={id}>
                  <div
                    className="relative cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent   pr-6"
                    onClick={() => navigate(`admin/${item.text.toLowerCase()}`)}
                  >
                    <span className="inline-flex justify-center items-center ml-4 text-[#ffa23c]">
                      {item.icon}
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
