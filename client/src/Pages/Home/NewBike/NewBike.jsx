import React from "react";
import { Link } from "react-router-dom";
import { ImageCard } from "../../../Components/Cards/ImageCard";
import BikeData from "../../../Data/BikeData";

const NewBike = () => {
  return (
    <div>
      <div className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className=" text-orange-600 mb-4 tracking-wide text-center text-sm font-medium">
            CHECK IT OUT
          </h1>
          <h2 className="text-4xl mb-5 font-medium   text-center tracking-normal text-gray-900">
            Best Sellers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-stretch gap-4 justify-center">
            {BikeData?.map(
              (item, id) =>
                item.newItem === true && (
                  <Link to={`/product/${item._id.$oid}`} key={item.id}>
                    <ImageCard key={id} item={item} />
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBike;
