import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePosts = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbImage, setThumbImage] = useState("");

  // Post Categories
  const postCategories = [
    "Education",
    "Discovery",
    "Agriculture",
    "Entertainment",
    "Music",
    "Art",
    "Business",
    "Investment",
    "Fashion",
    "Sports",
    "Science",
    "Weather",
  ];

  // Quill Modules
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  // Quill Formats
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <section className="mt-32 bg-gradient-to-b from-white to-gray-100 min-h-screen py-12">
      <div className="w-[90%] max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create New Post
        </h2>

        <form className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {postCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* React Quill Editor */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Content</label>
            <ReactQuill
              modules={modules}
              formats={formats}
              value={description}
              onChange={setDescription}
              className="bg-white rounded-lg h-40"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Thumbnail</label>
            <input
              type="file"
              onChange={(e) => setThumbImage(e.target.value)}
              accept="image/png, image/jpg, image/jpeg"
              className="w-full p-3 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-all duration-300"
          >
            Publish Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePosts;
