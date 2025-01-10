// Dummy Posts Data
import { DummyPosts } from "../data/data";

// Components
import PostItem from "../components/PostItem";

// React Hook
import { useState } from "react";

const AuthorPost = () => {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="mt-32 bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] py-16">
      {/* Page Title */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-12 tracking-wide">
        Author's Posts
      </h1>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto px-4">
          {posts.map(({ id, Image, authorId, category, title, des }, index) => (
            <PostItem
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
              key={index}
              Image={Image}
              authorId={authorId}
              category={category}
              title={title}
              des={des}
              postId={id}
            />
          ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl font-medium text-red-500 mt-16">
          No Posts Found
        </h2>
      )}
    </section>
  );
};

export default AuthorPost;
