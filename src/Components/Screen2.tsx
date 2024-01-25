import React from "react";
import { Link } from "react-router-dom";

const Screen2: React.FC = () => {
  return (
    <>
      <div className="absolute">
        <img src="./icons/Ellipse 8.svg"/>
      </div>
      <img
        className="inline-block w-full mt-32"
        src="/icons/loading.svg"
        alt=""
      />
      <div className="app-container">
        <h3 className="loading-title">
          Welcome to
          <span>AI PDF</span>
        </h3>
        <p className="loading-description">
          Your locally hosted one-stop-shop for all your PDF needs.
        </p>
        <button className="loading-button" ><Link to="/screen1">Get started</Link></button>
      </div>
    </>
  );
};

export default Screen2;
