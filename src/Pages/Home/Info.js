import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  pb-5 ">
      <InfoCard
        cardtitle="Opening Hours"
        description="from 9:am to 10:pm"
        img={clock}
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
      ></InfoCard>
      <InfoCard
        cardtitle="Visit our Location"
        description="Rampura, Dhaka"
        img={marker}
        bgClass="bg-neutral"
      ></InfoCard>
      <InfoCard
        cardtitle="Contacts us"
        description=" +8975842019"
        img={phone}
        bgClass="bg-gradient-to-r from-blue-500 to-cyan-500"
      ></InfoCard>
    </div>
  );
};

export default Info;
