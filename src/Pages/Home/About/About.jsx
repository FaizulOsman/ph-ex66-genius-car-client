import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="my-40">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img src={person} className="rounded-lg shadow-2xl w-4/5" alt="" />
            <img
              src={parts}
              className="rounded-lg shadow-2xl absolute right-5 top-1/2 w-3/5"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
