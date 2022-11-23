import React from "react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Service from "./Service";
import BookingModal from "./BookingModal";

const Availableappoinment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "pp");

  useEffect(() => {
    fetch(`http://localhost:5000/service?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]);
  return (
    <div className="py-5">
      <h1 className="text-xl text-secondary text-center py-5">
        Available service on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default Availableappoinment;
