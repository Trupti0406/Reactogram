import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.PNG";

const PageNotFound = () => {
  return (
    <div className="card text-center border-0">
      <img
        src={logo}
        className="card-img-top"
        alt="logo"
        style={{ width: "20rem", margin: "auto", marginTop: "5rem" }}
      ></img>
      <div className="card-body">
        <h1 className="card-title mb-2" style={{ fontSize: "10rem" }}>
          404
        </h1>
        <h5 className="card-text">
          OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!
        </h5>
        <Link to="/login" className="btn btn btn-outline-secondary mt-3 ">
          Go to login page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
