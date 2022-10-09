import React from "react";

import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section className=" " style={{ background: `url(${appointment}) ` }}>
      <div className="text-center  ">
        <h1 className="text-xl text-primary font-bold  ">Contact Us</h1>
        <h2 className="text-3xl text-white">Stay Connected with us</h2>
      </div>

      <div className="hero ">
        <div className="hero-content my-20  ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="email address"
                  className="input "
                />
              </div>
              <div className="form-control">
                <input type="text" placeholder="subject" className="input " />
              </div>
              <div className="form-control">
                <textarea
                  type="text"
                  placeholder="Your massage"
                  className="input "
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
