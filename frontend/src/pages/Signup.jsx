import axios from "axios";

import "./Login.css";
import socialDesktop from "../images/social-desktop.PNG";
import socialMobile from "../images/social-mobile.PNG";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { API_BASE_URL } from "../config";
import Swal from "sweetalert2";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const signup = (event) => {
    event.preventDefault();

    setLoading(true);
    const requestData = { fullName: fullName, email, password };
    axios
      .post(`http://localhost:5000/signup`, requestData)
      .then((result) => {
        if (result.status === 201) {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "User successfully registered",
          });
        }
        setFullName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Some error occurred please try again later!",
        });
      });
  };

  return (
    <div className="container signup-container">
      <div className="row"></div>
      <div className="row d-flex align-items-center justify-center">
        <div className="col-lg-7 col-md-5 col-sm-12 d-flex justify-content-center align-items-center">
          <img
            className="socialDesktop"
            style={{ width: "87%" }}
            src={socialDesktop}
            alt="Logo"
          />
          <img className="socialMobile" src={socialMobile} alt="Logo" />
        </div>
        <div className="col-lg-5 col-md-7 col-sm-12">
          <div className="card shadow text-center">
            {loading ? (
              <div className="col-md-12 mt-3 text-center">
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="card-body px-5">
              <h4 className="card-title mt-3 fw-bold">Sign Up</h4>
              <form onSubmit={(e) => signup(e)}>
                <input
                  type="text"
                  className="p-2 mt-4 mb-2 form-control input-bg"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="d-grid mt-3">
                  <button
                    className="btn btn-primary custom-btn custom-btn-blue"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="my-4">
                  <div className="text-muted or">OR</div>
                </div>
                <div className="mt-3 mb-5 d-grid">
                  <button className="btn custom-btn custom-btn-white">
                    <span className="text-muted fs-6">
                      Already have an account?
                    </span>
                    <Link
                      to="/login"
                      className="ms-1 text-info fw-light text-decoration-none"
                    >
                      Log In
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
