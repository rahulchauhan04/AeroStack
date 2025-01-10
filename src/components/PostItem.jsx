import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({ postId, Image, authorId, category, title, des }) => {
  const shortTitle = title.length > 40 ? title.substring(0, 40) + "..." : title;
  const shortDes = des.length > 145 ? des.substring(0, 145) + "..." : des;

  return (
  <article className="bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={Image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <Link to={`/posts/${postId}`}>
          <h3 className="text-lg font-semibold text-primary hover:text-secondary">
            {shortTitle}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-2">{shortDes}</p>

        <div className="flex justify-between items-center mt-4">
          <PostAuthor authorId={authorId} />
          <Link
            to={`/posts/categories/${category}`}
            className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-md hover:bg-primary transition-colors"
          >
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
