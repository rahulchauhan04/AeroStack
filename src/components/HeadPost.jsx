import { Link } from "react-router-dom";
import { HeadPost as HeadPostData } from "../data/data";

const HeadPost = () => {
  return (
    <article className="mt-32">
      {HeadPostData.map(({ id, Image, authorId, title, des }, index) => (
        <div
          key={index}
          className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Post Content */}
          <div className="space-y-6">
            <Link to={`posts/${authorId}`}>
              <h1 className="text-4xl font-semibold text-gray-900 leading-snug hover:text-blue-600 transition-all duration-300">
                {title}
              </h1>
            </Link>
            <p className="text-lg leading-relaxed text-gray-600">
              {des}
            </p>
            <Link
              to={`posts/${authorId}`}
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Read More
            </Link>
          </div>

          {/* Post Image */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={Image}
              alt={title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default HeadPost;
