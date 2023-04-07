import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <main className="flex items-center justify-center h-screen bg-black">
        <div className="px-4 py-16 mx-auto text-center lg:px-8 lg:py-48 max-w-7xl sm:px-6 sm:py-24">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
              <p className="text-5xl tracking-tight text-white  lg:text-9xl">
                404
              </p>
              <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-400">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              <Link
                className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-orange-600 border-2 border-orange-600 rounded-full nline-flex hover:bg-transparent hover:border-orange-600 hover:text-orange-600 focus:outline-none lg:w-auto focus-visible:outline-orange-600 text-sm focus-visible:ring-black"
                to="/"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
