import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = { email: user.email };

        // get JWT token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // local storage is the easiest but not the best way to store data
            localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          });

        toast.success("Successfully Login");
        form.reset();
        // navigate(from, { replace: true });
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
          <img className="w-3/4" src={loginImg} alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
            <p>
              New to Genius Car?{" "}
              <Link className="text-orange-600" to="/signup">
                Sing Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
