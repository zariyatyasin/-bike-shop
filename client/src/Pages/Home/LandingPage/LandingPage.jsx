import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <div className=" h-[80vh]   md:h-[90vh] flex flex-col items-center justify-center home ">
        <section className="py-4 ">
          <div className="grid max-w-screen-xl justify-center px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
            <div className="mr-auto place-self-center lg:text-start text-center mb-4">
              <h1 className="max-w-2xl mb-4 text-center lg:text-left text-3xl  font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                Unlock Your Bike
              </h1>
              <p className="max-w-2xl mb-6 font-light text-sm text-gray-500 lg:mb-8 md:text-lg lg:text-xl  ">
                From checkout to global sales tax compliance, companies around
                the world use Flowbite to simplify their payment stack.
              </p>
              <Link
                to="/products/unlock"
                className="inline-flex items-center justify-center   max-w-[192px] mb-3 px-3 py-3 text-base font-medium text-center   bg-orange-600 text-white "
              >
                <span className="mr-1"> Unlock Now</span>
                <LockOutlinedIcon></LockOutlinedIcon>
              </Link>
              <Link
                to={"/contact"}
                className="inline-flex ml-3 items-center justify-center max-w-[192px] px-3 py-3 text-base font-medium text-center text-gray-900 border border-gray-300  "
              >
                Speak to Sales
              </Link>
            </div>
            <div className="   flex items-center justify-center lg:flex  ">
              <img
                className="  w-[600px] "
                src="./image/bike.png"
                alt="mockup"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
