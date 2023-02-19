import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.PNG";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-white shadow">
        <div className="container-fluid">
          <a className="navbar-brand ms-5">
            <img src={Logo} alt="logo" height="45px" />
          </a>
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
              <a className="nav-link fs-5" href="#">
                <i className="fa-solid fa-circle"></i>
              </a>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
