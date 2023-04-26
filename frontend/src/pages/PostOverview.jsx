import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "../Components/Card";

const PostOverview = () => {
  const [allposts, setAllposts] = useState([]);

  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const getAllPosts = async () => {
    const response = await axios.get(
      `https://reactogram-backend-9msk.onrender.com/allposts`
    );

    if (response.status === 200) {
      setAllposts(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occurred while getting all posts",
      });
    }
  };

  const deletePost = async (postId) => {
    const response = await axios.delete(
      `https://reactogram-backend-9msk.onrender.com/deletepost/${postId}`,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      getAllPosts();
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="container mt-md-5 mt-3">
      <div className="row">
        {allposts.map((post) => {
          return (
            <div className="col-md-6 col-lg-4 mb-2" key={post._id}>
              <Card
                postData={post}
                deletePost={deletePost}
                getAllPosts={getAllPosts}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostOverview;
