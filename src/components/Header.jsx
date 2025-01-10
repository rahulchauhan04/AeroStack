import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// React Icons
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 1024);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsNavShow(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close nav on smaller screens
  const closeNavHandler = () => {
    if (window.innerWidth < 1024) {
      setIsNavShow(false);
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md h-20 fixed top-0 left-0 w-full border-b border-gray-200 z-50">
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeNavHandler}
          className="text-gray-900 text-2xl font-semibold tracking-wide"
        >
          Aero<span className="text-blue-600">StacK</span>
        </Link>

        {/* Navigation Menu */}
        {isNavShow && (
          <ul className="flex items-center gap-10 md:flex-row flex-col md:static absolute top-20 right-0 bg-white md:bg-transparent w-full md:w-auto shadow-lg md:shadow-none p-6 md:p-0 transition-all duration-300 rounded-lg">
            <li>
              <Link
                to="/profile/id"
                onClick={closeNavHandler}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Beg Joker
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                onClick={closeNavHandler}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Create Posts
              </Link>
            </li>
            <li>
              <Link
                to="/authors"
                onClick={closeNavHandler}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Authors
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                onClick={closeNavHandler}
                className="text-gray-700 hover:text-red-500 transition-colors duration-300 font-medium"
              >
                Logout
              </Link>
            </li>
          </ul>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsNavShow(!isNavShow)}
          className="text-gray-700 text-3xl md:hidden cursor-pointer"
        >
          {isNavShow ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
