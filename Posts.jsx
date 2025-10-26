import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../services/api";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      alert("Please login to access posts.");
      navigate("/login");
      return;
    }

    const fetchPosts = async () => {
      try {
        const { data } = await getPosts();
        setPosts(data);
      } catch (err) {
        setError("Error fetching posts from backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [navigate]);

  if (loading) return <p className="p-6">Loading posts...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="bg-white p-4 rounded-xl shadow mb-3">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;