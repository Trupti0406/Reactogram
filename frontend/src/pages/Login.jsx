import "./Login.css";
import socialDesktop from "../images/social-desktop.PNG";
import socialMobile from "../images/social-mobile.PNG";

import React from "react";

const Login = () => {
  return (
    <div className="container login-container">
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
              <h4 className="card-title mt-3 fw-bold">Log In</h4>
              <form>
                <input
                  type="email"
                  className="p-2 mt-4 mb-2 form-control input-bg"
                  placeholder="Phone number, username or email"
                />

                <input
                  type="password"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Password"
                />

                <div className="d-grid mt-3">
                  <button className="btn btn-primary custom-btn custom-btn-blue">
                    Log In
                  </button>
                </div>
                <div className="my-4">
                  <div className="text-muted or">OR</div>
                </div>
                <div className="mt-3 mb-5 d-grid">
                  <button className="btn custom-btn custom-btn-white">
                    <span className="text-muted fs-6">
                      Don't have an account?
                    </span>
                    <span className="ms-1 text-info fw-semibold">Sign Up</span>
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

export default Login;
