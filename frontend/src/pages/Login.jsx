import "./Login.css";
import socialDesktop from "../images/social-desktop.PNG";
import socialMobile from "../images/social-mobile.PNG";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setLoading(true);
    const requestData = {
      email,
      password,
    };
    axios
      .post(`https://reactogram-backend-9msk.onrender.com/login`, requestData)
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          localStorage.setItem("token", result.data.result.token);
          localStorage.setItem("user", JSON.stringify(result.data.result.user));
          // now we need to do dispatch of an action which will have a type and a payload
          dispatch({ type: "LOGIN_SUCCESS", payload: result.data.result.user });
          setLoading(false);
          navigate("/myProfile");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        Swal.fire({
          icon: "error",
          title: error.response.data.error,
        });
      });
  };

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
              <h4 className="card-title mt-3 fw-bold">Log In</h4>
              <form onSubmit={(e) => login(e)}>
                <input
                  type="email"
                  className="p-2 mt-4 mb-2 form-control input-bg"
                  placeholder="Phone number, username or email"
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
                    <Link
                      to="/signup"
                      className="ms-1 text-info fw-ligh text-decoration-none"
                    >
                      Sign Up
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

export default Login;
