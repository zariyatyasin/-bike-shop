import React from "react";
import BikeShow from "../../Components/BikeShowcase/BikeShow";
import Reviews from "../../Components/review/Reviews";
import BikeFeatures from "./BikeFeatures/BikeFeatures";
import Facilities from "./Facilities/Facilities";
import LandingPage from "./LandingPage/LandingPage";
import NewBike from "./NewBike/NewBike";

const Home = () => {
  return (
    <div>
      {" "}
      <LandingPage />
      <BikeFeatures />
      <Facilities />
      <NewBike />
      <BikeShow />
      <Reviews />
    </div>
  );
};

export default Home;
