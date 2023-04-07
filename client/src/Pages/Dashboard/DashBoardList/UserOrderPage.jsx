import React from "react";
import { Link } from "react-router-dom";

const UserOrderPage = () => {
  return (
    <div className="flex justify-center w-full">
      <section className=" p-10  w-full  justify-center items-center   bg-white border border-gray-200   left-12 bottom-16  first-line:before: rounded-2xl">
        <h2 className="font-semibold text-gray-800  ">No Order</h2>

        <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
          <Link to={`/products/All-Bike`}>
            <button className="text-xs text-gray-800 underline transition-colors duration-300  ">
              GO to Shop
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UserOrderPage;
