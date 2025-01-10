import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="text-center p-10 bg-white rounded-xl shadow-2xl max-w-lg w-full animate-fade-in">
        {/* Error Code */}
        <h2 className="text-8xl font-extrabold text-red-500 mb-4 drop-shadow-md">
          404
        </h2>

        {/* Error Message */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Oops! Page Not Found
        </h3>

        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 py-2 px-6 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          <FaArrowLeft /> Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
