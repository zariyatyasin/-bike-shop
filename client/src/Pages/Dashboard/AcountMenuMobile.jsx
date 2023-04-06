import React from "react";

const AcountMenuMobile = () => {
  return (
    <div>
      <ul className=" text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  ">
        <li className="w-full px-4 py-4  border-b">Profile</li>
        <li className="w-full px-4 py-4 border-b   ">My Order</li>
        <li className="w-full px-4 py-4 border-b  ">My Wishlist</li>
        <li className="w-full px-4 py-4 border-b  ">Messages</li>

        <li className="w-full px-4 py-2  border-b">My Reviews</li>
        <li className="w-full px-4 py-2  border-b">Help</li>
        <li className="w-full px-4 py-2  border-b">Sign Out</li>
      </ul>
    </div>
  );
};

export default AcountMenuMobile;
