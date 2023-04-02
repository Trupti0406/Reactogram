import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.PNG";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGIN_ERROR" });
  };

  return (
    <>
      <nav className="navbar bg-white shadow">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-5">
            <img src={Logo} alt="logo" height="45px" />
          </Link>
          <form className="d-flex me-sm-1 me-md-5">
            <div className="d-flex  gap-3">
              <Link className="nav-link fs-5" to="/posts">
                <i className="fa-solid fa-house"></i>
              </Link>
              {localStorage.getItem("token") != null ? (
                <Link className="nav-link fs-5">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              ) : (
                ""
              )}

              <div className="dropdown">
                {localStorage.getItem("token") != null ? (
                  <>
                    {" "}
                    <Link
                      className="btn"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        className="navbar-profile-pic"
                        src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
                        alt="profile-pic"
                      />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/myProfile" className="dropdown-item">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/login"
                          onClick={() => logout()}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
