import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "fluoride treatment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity feeling",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: cavity,
    },
    {
      _id: 3,
      name: "teeth whitenning",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: whitening,
    },
  ];
  return (
    <div className="my-20">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Service we provide</h2>
      </div>

      <div className="grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-14">
            <h1 className="text-5xl font-bold">
              Exceptional Dental <br /> care, On Your Terms
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi. Provident cupiditate
              voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
