import React from "react";

const DashboardCard = ({ title, value, icon, des, per }) => {
  return (
    <div>
      <div className=" bg-white flex flex-col justify-between items-start   p-4 shadow-md border  rounded   text-black font-medium h-32">
        <div className="flex items-center justify-between w-full ">
          <div className="text-xs  text-slate-400  ">{title}</div>
          <div className=" text-[#ffa23c]  ">{icon}</div>
        </div>
        <div className="flex items-start">
          <div className="text-xl font-bold text-slate-800 ">{value}</div>
        </div>
        <div className="flex items-center justify-between  w-full">
          <div className="text-xs  text-white px-1.5 bg-green-500 rounded-full">
            +{per}%
          </div>
          <div className="text-xs  text-slate-400">{des}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
