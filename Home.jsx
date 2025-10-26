// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(saved);
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const displayed = filtered.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <div className="max-w-4xl mx-auto mt-6 px-3">
      <h1 className="text-3xl font-bold mb-4 text-center">📚 My Blog</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full rounded mb-4"
      />
      {displayed.length === 0 ? (
        <p className="text-center text-gray-600">No posts yet. Create one!</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {displayed.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="p-4 bg-white shadow rounded hover:bg-gray-100 transition"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="rounded mb-2 h-40 w-full object-cover"
                />
              )}
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600 line-clamp-2">{post.content}</p>
              <p className="text-sm text-gray-400 mt-2">
                {post.comments?.length || 0} comments
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}