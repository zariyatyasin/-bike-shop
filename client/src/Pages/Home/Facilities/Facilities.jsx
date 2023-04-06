import React from "react";
import ElectricMopedOutlinedIcon from "@mui/icons-material/ElectricMopedOutlined";
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
const Facilities = () => {
  return (
    <div>
      <div className=" bg-white  max-w-screen-xl mx-auto  py-20">
        <div className="text-center">
          <h2 className=" text-sm tracking-widest font-mono text-orange-600">
            YOUR RIDE START HERE.
          </h2>
          <p className="mt-2 md:text-xl font-mono font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl">
            Our Facilities & Features
          </p>
        </div>

        <div className="  flex flex-wrap justify-around  items-center  w-full mt-10 ">
          <div className="max-w-sm  flex flex-col justify-center text-center items-center mt-5 pb-10  ">
            <div className=" flex h-12 w-12 items-center justify-center text-orange-600  mb-2 p-10 ">
              <ElectricMopedOutlinedIcon
                style={{ fontSize: "56px" }}
              ></ElectricMopedOutlinedIcon>
            </div>
            <div>
              <p className=" text-lg font-medium leading-6 text-gray-900 mb-4">
                Complete Overhaul
              </p>

              <div className="mt-2 font-light tracking-wide    text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis
              </div>
            </div>
          </div>

          <div className="max-w-sm  flex flex-col justify-center text-center items-center pb-10 mt-5 ">
            <div className=" flex h-12 w-12 items-center justify-center rounded-md text-orange-600  mb-2 p-10">
              <SportsMotorsportsOutlinedIcon
                style={{ fontSize: "56px" }}
              ></SportsMotorsportsOutlinedIcon>
            </div>
            <div>
              <p className=" text-lg font-medium leading-6 text-gray-900 mb-4">
                Custom Parts & Accessories
              </p>

              <div className="mt-2 font-light tracking-wide  text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis
              </div>
            </div>
          </div>

          <div className="max-w-sm  flex flex-col justify-center text-center items-center mt-5 pb-10 ">
            <div className=" flex h-12 w-12 items-center justify-center rounded-md text-orange-600  mb-2 p-10">
              <DirectionsBikeOutlinedIcon
                style={{ fontSize: "56px" }}
              ></DirectionsBikeOutlinedIcon>
            </div>
            <div>
              <p className=" text-lg font-medium leading-6 text-gray-900 mb-4">
                Bike Fitting & Delivery
              </p>

              <div className="mt-2 font-light tracking-wide   text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
