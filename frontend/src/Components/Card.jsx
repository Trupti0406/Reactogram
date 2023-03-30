import React from "react";
import "./Card.css";
import moreAction from "../images/more-action.PNG";
import { useSelector } from "react-redux";

const Card = (props) => {
  const user = useSelector((state) => state.userReducer);

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
                <p className="fs-6 fw-semibold">
                  {props.postData.author.fullName}
                </p>
                <p className="location">{props.postData.location}</p>
              </div>
            </div>
            {props.postData.author._id === user.user._id ? (
              <div className="col-6 ">
                <img
                  onClick={() => props.deletePost(props.postData._id)}
                  className="float-end fs-3 p-2 mt-2"
                  src={moreAction}
                  alt="More Action"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img
                className="post-img py-2 px-3"
                src={props.postData.image}
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
              <br />
            </div>
            <p className="mt-2 fw-semibold">{props.postData.description}</p>
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
