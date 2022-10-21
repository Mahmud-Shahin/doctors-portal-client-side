import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner";
import Availableappoinment from "./Availableappoinment";

const Appoinmentwith = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <Availableappoinment date={date}></Availableappoinment>
    </div>
  );
};

export default Appoinmentwith;
