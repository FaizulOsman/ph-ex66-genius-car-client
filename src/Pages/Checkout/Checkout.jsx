import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import checkoutImg from "../../assets/images/checkout/checkout.png";

const Checkout = () => {
  const { title, price, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.firstName.value + form.lastName.value;
    const phone = form.phone.value;
    const email = form?.email.value || "unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      customer: name,
      price,
      email,
      phone,
      message,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order Placed Successfully");
          form.reset();
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="w-3/4 mx-auto my-10">
      <img className="my-5 md:my-20" src={checkoutImg} alt="" />
      <div className="mb-8">
        <h4 className="text-center text-3xl font-semibold">
          You are about ot order: {title}
        </h4>
        <h4 className="text-center text-3xl font-semibold">Price: {price}</h4>
      </div>

      <form
        onSubmit={handlePlaceOrder}
        className="card flex-shrink-0 w-full p-3 shadow-2xl bg-base-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Phone</span>
            </label>
            <input
              type="text"
              placeholder="Your Phone"
              name="phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
              readOnly
              required
            />
          </div>
        </div>

        <div className="form-control mb-10">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Your Message"
            name="message"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Place Your Order"
          className="btn btn-primary w-full"
        />
      </form>
    </div>
  );
};

export default Checkout;
