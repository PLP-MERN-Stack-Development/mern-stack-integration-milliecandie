 // src/pages/PostDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const found = posts.find((p) => p.id === Number(id));
    setPost(found);
  }, [id]);

  const handleDelete = () => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updated = posts.filter((p) => p.id !== Number(id));
    localStorage.setItem("posts", JSON.stringify(updated));
    navigate("/");
  };

  const handleComment = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updated = posts.map((p) =>
      p.id === Number(id)
        ? { ...p, comments: [...(p.comments || []), comment] }
        : p
    );
    localStorage.setItem("posts", JSON.stringify(updated));
    setPost({ ...post, comments: [...(post.comments || []), comment] });
    setComment("");
  };

  if (!post) return <p className="text-center mt-8">Post not found</p>;

  return (
    <div className="max-w-2xl mx-auto mt-6 bg-white p-4 shadow rounded">
      {post.image && (
        <img
          src={post.image}
          alt=""
          className="w-full rounded mb-4 h-60 object-cover"
        />
      )}
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="mb-4 text-gray-700">{post.content}</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete Post
      </button>

      <h3 className="mt-6 text-xl font-bold">💬 Comments</h3>
      <ul className="mb-3">
        {post.comments?.map((c, i) => (
          <li key={i} className="border-b py-1">{c}</li>
        ))}
      </ul>
      <form onSubmit={handleComment} className="flex gap-2">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border flex-grow p-2 rounded"
          required
        />
        <button className="bg-blue-500 text-white px-3 rounded">Add</button>
      </form>
    </div>
  );
}