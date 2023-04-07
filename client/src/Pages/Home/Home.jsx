import React from "react";
import BikeShow from "../../Components/BikeShowcase/BikeShow";
import Reviews from "../../Components/review/Reviews";
import { Slider } from "../../Components/slider/Slider";
import BikeFeatures from "./BikeFeatures/BikeFeatures";
import Facilities from "./Facilities/Facilities";
import LandingPage from "./LandingPage/LandingPage";
import NewBike from "./NewBike/NewBike";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <BikeFeatures />
      <Facilities />
      <NewBike />
      <BikeShow />
      <div className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className=" text-orange-600 mb-4 tracking-wide text-center text-sm font-medium">
            New Bike
          </h1>
          <h2 className="text-4xl mb-5 font-medium   text-center tracking-normal text-gray-900">
            Best Sellers
          </h2>
          <Slider />
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Home;
