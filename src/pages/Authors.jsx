// Dummy Author Data
import { Link } from 'react-router-dom';
import { DummyAuthor } from '../data/data';
import { useState } from 'react';

const Authors = () => {
  const [author, setAuthor] = useState(DummyAuthor);

  return (
    <section className="mt-32 bg-gradient-to-b from-[#f0f4ff] to-white py-16">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-12 tracking-wide">
        Meet Our Authors
      </h1>

      {author.length > 0 ? (
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[1400px] mx-auto px-4">
          {author.map(({ id, Image, name, posts }, index) => (
            <Link
              to={`/posts/user/${id}`}
              key={index}
              className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Author Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 shadow-sm">
                <img
                  src={Image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  {name}
                </h4>
                <p className="text-sm text-gray-500">{posts} Posts</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl font-medium text-red-500 mt-16">
          No Authors Found.
        </h2>
      )}
    </section>
  );
};

export default Authors;
