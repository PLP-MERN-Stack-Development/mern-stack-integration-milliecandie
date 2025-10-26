import { useState, useEffect } from "react";
import { addComment, fetchComments } from "../api/api";

export default function CommentSection({ postId, token }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchComments(postId).then(setComments);
  }, [postId]);

  const handleAdd = async () => {
    if (!text) return;
    const newComment = await addComment(postId, text, token);
    setComments([...comments, newComment]);
    setText("");
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Comments 💬</h3>
      <div className="space-y-2">
        {comments.map((c) => (
          <div key={c.id} className="border p-2 rounded bg-gray-50">
            <strong>{c.user}:</strong> {c.text}
          </div>
        ))}
      </div>
      {token && (
        <div className="flex gap-2 mt-2">
          <input
            className="border p-1 flex-1 rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a comment..."
          />
          <button onClick={handleAdd} className="bg-blue-500 text-white px-2 rounded">
            Send
          </button>
        </div>
      )}
    </div>
  );
}