import React from "react";
import Appoinment from "../Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Appoinment></Appoinment>
    </div>
  );
};

export default Home;
