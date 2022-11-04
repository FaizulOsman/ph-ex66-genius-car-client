import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center my-10">
        <h5 className="text-2xl font-semibold text-orange-400">Services</h5>
        <h3 className="text-4xl font-semibold my-3">Our Service Area</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          debitis recusandae minus odio maiores quibusdam eligendi min.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
