import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(`Do you want to delete this order?`);
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Order deleted successfully.");
            const remaining = orders.filter((o) => o._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          const remaining = orders.filter((o) => o._id !== id);
          const approving = orders.find((o) => o._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="my-20">
      <h3 className="text-3xl font-semibold text-center mb-5">
        You have Orders: {orders?.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Job</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRow
                key={order?._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
