import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className="container shadow mt-3">
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <img
            className="profile-pic p-1"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile-pic"
          />
        </div>
        <div className="col-md-6">Right</div>
      </div>
    </div>
  );
}

export default Profile