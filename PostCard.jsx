import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded-lg shadow mb-3 bg-white">
      <h2 className="text-xl font-bold text-indigo-700">{post.title}</h2>
      <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
      <p className="text-sm mt-2">✍️ {post.author}</p>
      <Link to={`/post/${post.id}`} className="text-blue-500">Read more</Link>
    </div>
  );
}