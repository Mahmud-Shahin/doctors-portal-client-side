import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;
  console.log(slots, name, _id);

  const handlebooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
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
                {slots.map((slot) => {
                  <option value={slot}>{slot}</option>;
                })}
              </select> */}

              <select className="select select-bordered w-full max-w-xs">
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>

              <input
                type="text"
                name="name"
                placeholder="your name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                type="text"
                name="email"
                placeholder="email address"
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
