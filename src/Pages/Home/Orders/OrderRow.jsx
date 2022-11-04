import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, customer, service, price, serviceName, message, status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <td>
        <Link
          onClick={() => handleDelete(_id)}
          className="btn-circle btn border-none bg-red-500 text-white"
        >
          X
        </Link>
      </td>
      <td className="font-bold flex items-center">
        <img className="w-20 mr-5 rounded-md" src={orderService?.img} alt="" />
        <span>{customer}</span>
      </td>
      <td className="font-bold">{serviceName}</td>
      <td>{price}</td>
      <td>{message}</td>
      <td>
        <button onClick={() => handleStatusUpdate(_id)} className="btn">
          {status ? status.status : "Pending"}
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
