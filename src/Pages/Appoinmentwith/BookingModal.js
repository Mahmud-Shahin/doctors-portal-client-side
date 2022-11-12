import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  console.log(slots, name, _id);
  const formattedDate = format(date, "pp");

  const handlebooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    const booking = {
      treatmentId: _id,
      treatment: name,
      formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    setTreatment(null);
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
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <p className="py-4">
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
              {/* <select
                name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot, index) => {
                  <option key={index} value={slot}>
                    {slot}
                  </option>;
                })}
              </select> */}

              <select className="select select-bordered w-full max-w-xs">
                <option> 08.00 AM - 08.30 AM</option>
                <option>08.30 AM - 09.00 AM</option>
                <option>09.00 AM - 9.30 AM</option>
                <option>09.30 AM - 10.00 AM</option>
                <option>10.00 AM - 10.30 AM</option>
                <option>10.30 AM - 11.00 AM</option>
              </select>

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
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
