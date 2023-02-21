import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.PNG";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              <a className="nav-link fs-5" href="#">
                <i class="searchIcon fa-solid fa-magnifying-glass"></i>
              </a>
              <a className="nav-link fs-5" href="#">
                <i className="fa-solid fa-house"></i>
              </a>
              <a className="nav-link fs-5" href="#">
                <i className="fa-regular fa-heart"></i>
              </a>

              <div className="dropdown">
                <a
                  className="btn"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <img
                    className="navbar-profile-pic"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="profile-pic"
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/myProfile" className="dropdown-item">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
