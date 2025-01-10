import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../assets/a1.jpg";

const PostAuthor = () => {
  return (
    <Link
      to="/posts/user/:id"
      className="flex items-center gap-4 hover:no-underline transition-transform transform hover:scale-105"
    >
      {/* Author Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
        <img
          src={AuthorImage}
          alt="Author"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Author Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          Krishna Samir
        </h3>
        <p className="text-sm text-gray-500 leading-tight">Just Now</p>
      </div>
    </Link>
  );
};

export default PostAuthor;
