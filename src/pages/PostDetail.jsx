// Router Link
import { Link } from 'react-router-dom';

// Components
import PostAuthor from '../components/PostAuthor';

// Post details image
import PostDetailImage from '../assets/1.jpg';

const PostDetail = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[var(--color-bg)] to-white min-h-screen">
      <div className="container mx-auto max-w-4xl bg-white p-10 rounded-xl shadow-xl transition-transform hover:scale-[1.02] duration-300">
        
        {/* Top Section: Author and Action Buttons */}
        <div className="flex justify-between items-center mb-8">
          <PostAuthor />
          <div className="flex gap-3">
            <Link
              to="/posts/:id/edit"
              className="px-5 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-md shadow-md hover:bg-[var(--color-gray-900)] hover:scale-105 transition-transform duration-300"
            >
              ✏️ Edit
            </Link>
            <Link
              to="/posts/:id/delete"
              className="px-5 py-2 text-sm font-medium text-white bg-[var(--color-danger)] rounded-md shadow-md hover:bg-red-700 hover:scale-105 transition-transform duration-300"
            >
              🗑️ Delete
            </Link>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-[var(--color-gray-900)] mb-6 leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit.
        </h1>

        {/* Post Image */}
        <div className="rounded-lg overflow-hidden mb-8 shadow-lg">
          <img
            src={PostDetailImage}
            alt="Post Detail"
            className="w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Post Description */}
        <div className="space-y-6 text-[var(--color-gray-700)] leading-relaxed text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur, ratione itaque nemo fuga molestiae nisi!
            Voluptate ut architecto voluptatum porro doloribus facere pariatur natus vel, exercitationem distinctio soluta nulla?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur, ratione itaque nemo fuga molestiae nisi!
            Voluptate ut architecto voluptatum porro doloribus facere pariatur natus vel, exercitationem distinctio soluta nulla?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur, ratione itaque nemo fuga molestiae nisi!
            Voluptate ut architecto voluptatum porro doloribus facere pariatur natus vel, exercitationem distinctio soluta nulla?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
