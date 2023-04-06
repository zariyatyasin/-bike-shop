import React from "react";
import "../../Style/global.css";
export const ImageCard = ({ item }) => {
  console.log(item?.images[0]?.img1);
  return (
    <div>
      <div className="h-64 cursor-pointer bg-gray-100 flex flex-col items-center justify-center">
        <div className=" relative    main  ">
          <img
            className=" rounded-t   max-w-[200px]  object-cover   h-full image-main   "
            src={item?.images[0]?.img1}
            alt="Product Preview"
          />
          <img
            className=" rounded-t object-cover w-fullmax-w-[288px]   image-hover "
            src={item.images[1].img2}
            alt="Product Preview"
          />
        </div>
      </div>
      <div className=" text-center">
        <h1 className=" uppercase text-xl font-bold mt-2 ">{item.name}</h1>
        <h1 className="  text-orange-600  font-bold text-sm ">
          {item.price} BDT
        </h1>
      </div>
    </div>
  );
};
