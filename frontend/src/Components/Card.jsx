import React from "react";
import "./Card.css";
import moreAction from "../images/more-action.PNG";

const Card = () => {
  return (
    <div>
      <div className="card shadow-sm">
        <div className="card-body px-2">
          <div className="row">
            <div className="col-6 d-flex">
              <img
                className="profile-pic p-1"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile-pic"
              />
              <div className="mt-2 ms-2">
                <p className="fs-6 fw-bold">_._dexter</p>
                <p className="location">Mumbai, India</p>
              </div>
            </div>
            <div className="col-6 ">
              <img
                className="float-end fs-3 p-2 mt-2"
                src={moreAction}
                alt="More Action"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img
                className="post-img img-fluid py-2 px-3"
                src="https://images.unsplash.com/photo-1556340346-5e30da977c4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Post Pic"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex">
              <i className="ps-3 fs-4 fa-regular fa-heart"></i>
              <i className="ps-3 fs-4 fa-regular fa-comment"></i>
              <i className="ps-3 fs-4 fa-solid fa-location-arrow"></i>
            </div>
            <div className="col-6">
              <span className="pe-3 fs-6 fw-bold float-end">200 likes</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <span className="ps-3 text-muted">2 Hours Ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
