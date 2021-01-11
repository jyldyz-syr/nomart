// import Timeline from "@material-ui/lab/Timeline";
import React from "react";
import BackgroundVideo from "../Home/BackgroundVideo/BackgroundVideo";
import HeroBlock from "../Home/Carousel";
import Advantages from "./Advantages";
import Categories from "./Categories";
import Reviews1 from "./Reviews1";
import Timeline from "./Timeline";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <BackgroundVideo />
      <Advantages />
      <Categories />
      <Products />
      <Timeline />
      <HeroBlock />
      <Reviews1 />
    </div>
  );
};

export default Home;
