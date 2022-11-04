import React from "react";
import Login from "../../Login/Login";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Login></Login>
    </div>
  );
};

export default Home;
