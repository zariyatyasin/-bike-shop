import React, { useState } from "react";
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavbarCart } from "./NavbarCart";
import { useSelector } from "react-redux";
import ProfileDropDown from "./ProfileDropDown";

export const Navbar = () => {
  const { currentUser } = useSelector((state) => state.LoginInUser);
  const [cartOpen, setCartopen] = useState(false);
  return (
    <div>
      <header className="bg-[#1A1A1A] shadow    flex items-center justify-between px-4  lg:px-6 xl:px-16">
        <Link
          to={"/"}
          style={{ fontFamily: "Zen Dots" }}
          className="    flex-shrink-0 flex items-center justify-center  "
        >
          <span className=" text-xl md:text-2xl text-orange-600 font-semibold ">
            R
          </span>
          <span className=" text-white font-semibold md:text-xl  ">
            -Station
          </span>
        </Link>
        <nav className=" hidden lg:flex  text-base lg:text-lg">
          <ul className="flex items-center text-white ml-4 xl:ml-8 mr-auto">
            <li className="p-3 xl:p-6 active">
              <Link to={`/products/All-Bike`}>
                <span> Products</span>
              </Link>
            </li>
            <li className="p-3 xl:p-6">
              <Link>
                <span>Marketplace</span>
              </Link>
            </li>

            <li className="p-3 xl:p-6">
              <Link className=" relative" to={"/contact"}>
                <div>Contact</div>
                <span className="flex absolute top-0 right-[-8px] ">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className=" flex items-center    ">
          <div className="hidden md:block text-white    ">
            <SearchOutlinedIcon
              style={{ fontSize: "24px" }}
            ></SearchOutlinedIcon>
          </div>
          <div className="   md:block text-white  p-3 xl:p-6">
            <ShoppingCartOutlinedIcon
              style={{ fontSize: "24px" }}
              onClick={() => setCartopen(!cartOpen)}
            />
          </div>
          {currentUser ? (
            <div className=" md:block">
              <ProfileDropDown currentUser={currentUser} />
            </div>
          ) : (
            <Link
              to={"/login"}
              className="  md:block text-white cursor-pointer  p-3 lg:p-0"
            >
              <AccountCircleOutlinedIcon
                style={{ fontSize: "24px" }}
              ></AccountCircleOutlinedIcon>
            </Link>
          )}
        </div>
      </header>
      <div className={`${cartOpen ? "block" : "hidden"}`}>
        <NavbarCart onClick={(value) => setCartopen(value)}></NavbarCart>
      </div>
    </div>
  );
};
