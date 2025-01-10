import { Link } from "react-router-dom";
import { FaRegSmileWink } from "react-icons/fa";

const Logout = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="text-center bg-white p-10 rounded-xl shadow-2xl max-w-md w-full animate-fade-in">
        
        {/* Logout Icon */}
        <div className="flex justify-center mb-6">
          <FaRegSmileWink className="text-[var(--color-primary)] text-6xl" />
        </div>

        {/* Logout Message */}
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-3">
          You have been logged out!
        </h2>

        <p className="text-[var(--color-gray-700)] mb-8">
          Thank you for visiting <span className="font-semibold text-[var(--color-primary)]">Aero StacK</span>. See you again soon!
        </p>

        {/* Go Back Home Button */}
        <Link
          to="/"
          className="inline-block py-3 px-6 bg-[var(--color-primary)] text-white font-semibold rounded-md hover:bg-[var(--color-gray-900)] transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default Logout;
