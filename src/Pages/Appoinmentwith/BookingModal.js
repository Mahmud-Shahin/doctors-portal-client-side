import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;

  const formattedDate = format(date, "pp");

  const handlebooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);

    const booking = {
      treatmentId: _id,
      treatment: name,
      formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for : {name}
          </h3>

          <form
            action=""
            onSubmit={handlebooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="submit"
              placeholder="submit"
              className="btn btn-secondary input-primary w-full max-w-xs"
            />
          </form>

          {/* <p className="py-4">

            <form
              onSubmit={handlebooking}
              className="grid grid-cols-1 gap-2 justify-items-center mt-2"
            >
              <input
                type="text"
                disabled
                value={format(date, "PP")}
                className="input input-bordered input-primary w-full max-w-xs"
              />


              <select
                name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot, index) => {
                  <option key={index} value={slot}>
                    {slot}
                  </option>;
                })}
              </select>

              {/* <select className="select select-bordered w-full max-w-xs">
                <option> 08.00 AM - 08.30 AM</option>
                <option>08.30 AM - 09.00 AM</option>
                <option>09.00 AM - 9.30 AM</option>
                <option>09.30 AM - 10.00 AM</option>
                <option>10.00 AM - 10.30 AM</option>
                <option>10.30 AM - 11.00 AM</option>
              </select> */}
          {/* 
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName}
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                type="text"
                name="email"
                disabled
                value={user?.email}
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                placeholder="phone"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                type="submit"
                placeholder="submit"
                className="input input-bordered input-primary w-full max-w-xs btn btn-secondary"
              />
            </form>

            </p>  */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
