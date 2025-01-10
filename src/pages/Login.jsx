import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandle = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container max-w-md w-full bg-white p-10 rounded-xl shadow-lg animate-fade-in">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
          <FaSignInAlt /> Login
        </h2>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={userData.email}
            onChange={changeInputHandle}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={userData.password}
            onChange={changeInputHandle}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Link to Register */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
