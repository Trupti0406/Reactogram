import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.PNG";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  // To see ig the user exists or noy, so that accordingly we can hide the dropdown
  // This is how we get data from store
  const user = useSelector((state) => state.userReducer);

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
          <form className="d-flex me-sm-1 me-md-5" role="search">
            <input
              className="searchBox form-control me-5 text-muted"
              type="search"
              placeholder="Search"
            />
            <div className="d-flex  gap-3">
              <Link className="nav-link fs-5">
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link className="nav-link fs-5">
                <i className="fa-solid fa-house"></i>
              </Link>
              {user ? (
                <Link className="nav-link fs-5">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              ) : (
                ""
              )}

              <div className="dropdown">
                {user ? (
                  <>
                    {" "}
                    <Link
                      className="btn"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        className="navbar-profile-pic"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
