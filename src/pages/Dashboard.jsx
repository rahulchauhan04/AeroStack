import { Link } from "react-router-dom";
import { DummyPosts } from "../data/data";
import { useState } from "react";

const Dashboard = () => {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="mt-32 min-h-screen bg-gray-50 py-10">
      <div className="w-11/12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Posts</h1>

        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map(({ id, Image, authorId, category, title, des }, index) => (
              <article
                key={index}
                className="flex items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Post Info */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 overflow-hidden rounded-md border border-gray-300">
                    <img
                      src={Image}
                      alt={`Post by ${authorId}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-800">
                      {title.length > 40 ? `${title.substring(0, 40)}...` : title}
                    </h5>
                    <p className="text-sm text-gray-500">{category}</p>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="flex gap-2">
                  <Link
                    to={`/posts/${id}`}
                    className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
                  >
                    View
                  </Link>
                  <Link
                    to={`/posts/${id}/edit`}
                    className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/posts/${id}/delete`}
                    className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <h2 className="text-center text-xl font-medium text-gray-600">
            You have no posts
          </h2>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
