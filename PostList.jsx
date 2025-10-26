import React, { useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Welcome to My Blog", content: "This is my first post 🎉" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet!</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 mb-3 border"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
            <Link
              to={`/posts/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;