import React from "react";
import { Link } from "react-router-dom";
import { BikeCat } from "../../../Data/Bikecat";
const BikeFeatures = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {BikeCat.map((item, id) => (
        <div className="  h-[400px] relative bg-black  " key={id}>
          <img
            alt="bike"
            className=" h-full  object-cover   "
            src={item.image}
          />
          <div
            className=" absolute top-0 flex flex-col justify-between
        p-10  w-full h-full bg-gradient-to-t from-transparent to-black"
          >
            <div className=" ">
              <h1 className=" text-xl md:text-4xl uppercase font-medium tracking-wide text-white">
                {item.title}
              </h1>
              <div className="mt-5">
                <span className=" text-orange-600 font-semibold text-xs">
                  THE ALL-NEW{" "}
                </span>
                <span className="ml-1 text-white font-semibold text-xs">
                  TRANCE ADVANCED PRO 29 SERIES
                </span>
              </div>
            </div>
            <div>
              <Link
                to={`/products/${item.cat}`}
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-xs   uppercase text-center   bg-orange-600 text-white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeFeatures;
