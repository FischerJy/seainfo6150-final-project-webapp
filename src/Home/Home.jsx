import React from "react";
import bg from "../images/bg.jpg";

const Home = () => {
  return (
    <div className="main">
      <h1>Welcome to weather forecast</h1>
      <p>You can check out the weather in the key cities you looking for on this website</p>
      <p>Hope our website can help you, if you have any questions, please consult with the administrator </p>
      <img src={bg} width="100%" height="100%" alt="tree frog" />
    </div>
  );
};

export default Home;
