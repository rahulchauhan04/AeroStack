// Dummy Posts Data
import { DummyPosts } from "../data/data";

// React Hook
import { useState } from "react";

// Components
import PostItem from "./PostItem";
import HeadPost from "./HeadPost";

const Posts = () => {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="mt-32 bg-[#f0f4ff]"> {/* Light blue background */}
      {/* Head Post Section */}
      <div className="mb-16">
        <HeadPost />
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[1800px] mx-auto px-4">
          {posts.map(({ id, Image, authorId, category, title, des }, index) => (
            <PostItem
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
        <h2 className="text-center text-2xl font-semibold text-red-500 mt-16">
          No Posts Found
        </h2>
      )}
    </section>
  );
};

export default Posts;
