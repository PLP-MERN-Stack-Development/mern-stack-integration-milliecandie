import React from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Post #{id}</h2>
      <p className="text-gray-700">
        This is where post details will appear once connected to the backend.
      </p>
    </div>
  );
}

export default SinglePost;