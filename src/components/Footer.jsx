// Router Link......................
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary mt-32 pt-24">
      <div className="w-[90%] max-w-[1800px] mx-auto">
        <ul className="flex items-center gap-4 mb-16 flex-wrap justify-center">
          {[
            "Education", "Discovery", "Agriculture", "Entertainment",
            "Art", "Business", "Investment", "Fashion",
            "Sports", "Science", "Movie", "Music", "Weather"
          ].map((category) => (
            <li key={category}>
              <Link
                to={`/posts/categories/${category}`}
                className="text-white bg-secondary py-2 px-4 rounded-md transition duration-300 hover:bg-hoverPrimary hover:text-white shadow-soft"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center py-4 text-white border-t border-borderLight">
          <small>&copy; {new Date().getFullYear()} AeroAegis. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
