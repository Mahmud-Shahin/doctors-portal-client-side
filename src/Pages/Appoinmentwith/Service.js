import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
              No slots Available.try another date
            </span>
          )}
        </p>
        <p className="text-secondary">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn modal-button btn btn-secondary text-center text-white"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
