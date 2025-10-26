import { useState } from "react";
import { createPost } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    if (!token) return alert("Login first");
    const res = await createPost({ title, content }, token);
    if (res.id) navigate("/");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <input className="border p-2 w-full mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 w-full mb-2 h-40" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSubmit} className="bg-indigo-600 text-white px-4 py-2 rounded w-full">Save</button>
    </div>
  );
}