import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import signupImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Login");
        form.reset();
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="hero my-20">
      <div className="hero-content grid grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={signupImg} alt="" />
        </div>
        <form
          onSubmit={handleSignup}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              />
            </div>
            <p>
              Already have an account?{" "}
              <Link className="text-orange-600" to="/login">
                Log In
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
