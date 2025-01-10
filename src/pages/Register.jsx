import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const changeInputHandle = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("User Registered:", userData);
    // Handle registration logic here
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--color-bg)] to-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-md bg-white p-10 rounded-xl shadow-2xl transition-transform hover:scale-[1.02] duration-300">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[var(--color-gray-900)] mb-8">
          Create an Account
        </h2>

        {/* Error Message */}
        {error && (
          <div className="w-full py-2 px-3 mb-4 bg-red-100 text-red-600 text-sm rounded-md">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandle}
            className="w-full p-3 border border-[var(--color-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-gray-900)]"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandle}
            className="w-full p-3 border border-[var(--color-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-gray-900)]"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandle}
              className="w-full p-3 border border-[var(--color-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-gray-900)]"
              required
            />
            <span
              className="absolute right-3 top-3 text-xl cursor-pointer text-[var(--color-gray-500)]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={changeInputHandle}
            className="w-full p-3 border border-[var(--color-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-gray-900)]"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[var(--color-primary)] text-white font-semibold rounded-md hover:bg-[var(--color-gray-900)] hover:scale-105 transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <small className="block text-center mt-6 text-[var(--color-gray-700)]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[var(--color-primary)] font-semibold hover:underline"
          >
            Sign In
          </Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
