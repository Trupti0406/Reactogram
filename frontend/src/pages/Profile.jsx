import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="container shadow mt-3 p-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <img
            className="profile-image p-1"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile-pic"
          />
          <div className="ms-3 fs-5 fw-bold">john_doe46</div>
          <div className="ms-3 fs-5">John Doe</div>
          <div className="ms-3 fs-5">
            UI/UX Designer @internshala | Follow @johndoe
          </div>
          <div className="ms-3 fs-5">
            My portfolio on <a href="#"> www.portfolio.com</a>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between mt-2">
          <div className="stats d-flex justify-content-center gap-4">
            <div className="count-section borderRight pe-5 fw-bold">
              <h4>34</h4>
              <p>Posts</p>
            </div>
            <div className="count-section borderRight ps-0 pe-4 fw-bold">
              <h4>638</h4>
              <p>Followers</p>
            </div>
            <div className="count-section fw-bold ps-1">
              <h4>829</h4>
              <p>Folllowing </p>
            </div>
          </div>
          <div className="buttons mx-auto mt-md-0 mt-4 d-flex justify-content-center gap-5">
            <button className="custom-btn custom-btn-white shadow-sm">
              <span className="fw-semibold fs-6">Edit Profile</span>
            </button>
            <button className="custom-btn custom-btn-white shadow-sm">
              <span className="fw-semibold fs-6">Upload Post</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-12">
          <hr />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
