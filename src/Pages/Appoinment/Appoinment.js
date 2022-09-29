import React from "react";
import doctor_small from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const Appoinment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center my-14 "
    >
      <div className="flex-1">
        <img src={doctor_small} className="mt-[-80px]" alt="" />
      </div>
      <div className="flex-1 ">
        <h3 className="text-xl text-primary my-6">Appoinment</h3>
        <h2 className="text-3xl text-white">Make an Appoinment Today</h2>
        <p className="text-white my-6">
          An appointment is a formal date or plan to meet at the appointed time.
          Whether you have a doctor’s appointment, a hair appointment, or a 1
          o’clock lunch appointment, you need to be there — or you’ll have a
          broken appointment. It’s easier to remember your appointments if you
          write them down! With roots in the Old French apointier, meaning to
          “arrange, settle, or place," appointment can also mean the placing, or
          appointing of, someone into an unelected position.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </section>
  );
};

export default Appoinment;
