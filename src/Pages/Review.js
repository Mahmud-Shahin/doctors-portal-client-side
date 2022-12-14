import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card  lg:max:w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.description}</p>
      </div>
      <div className="flex items-center ">
        <div className="avatar ">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100  mx-5 my-5">
            <img src={review.img} alt="img" />
          </div>
        </div>

        <div>
          <h4 className="text-xl">{review.name}</h4>
          <p>{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
