import "./Login.css";
import socialDesktop from "../images/social-desktop.PNG";
import socialMobile from "../images/social-mobile.PNG";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container signup-container">
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
            <div className="card-body px-5">
              <h4 className="card-title mt-3 fw-bold">Sign Up</h4>
              <form>
                <input
                  type="text"
                  className="p-2 mt-4 mb-2 form-control input-bg"
                  placeholder="Phone"
                />
                <input
                  type="email"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Full Name"
                />

                <input
                  type="password"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Password"
                />

                <div className="d-grid mt-3">
                  <button className="btn btn-primary custom-btn custom-btn-blue">
                    Sign Up
                  </button>
                </div>
                <div className="my-4">
                  <div className="text-muted or">OR</div>
                </div>
                <div className="mt-3 mb-5 d-grid">
                  <button className="btn custom-btn custom-btn-white">
                    <span
                      className="text-muted fs-6"
                      
                    >
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
