import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { _id, img, title, price } = service;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 rounded-lg" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title text-orange-500">Price: ${price}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
