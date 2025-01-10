import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";

const DeletePost = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-6 bg-gray-50 px-4">
      {/* Warning Icon */}
      <AiOutlineWarning className="text-red-500 text-6xl" />

      {/* Confirmation Text */}
      <h2 className="text-3xl font-bold text-gray-800">Post Deleted</h2>
      <p className="text-gray-600 text-center">
        The post has been successfully deleted. You can go back to the homepage.
      </p>

      {/* Navigation Button */}
      <Link
        to="/"
        className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default DeletePost;
