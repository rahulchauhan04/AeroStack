import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbImage, setThumbImage] = useState('');

  const postCategories = [
    'Education',
    'Discovery',
    'Agriculture',
    'Entertainment',
    'Music',
    'Art',
    'Business',
    'Investment',
    'Fashion',
    'Sports',
    'Science',
    'Weather',
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image',
  ];

  return (
    <section className="py-16 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ✏️ Edit Your Post
        </h2>
        
        <form className="flex flex-col gap-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Post Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              {postCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* React Quill Editor */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Post Content
            </label>
            <ReactQuill
              modules={modules}
              formats={formats}
              value={description}
              onChange={(value) => setDescription(value)}
              className="bg-white border border-gray-300 rounded-md min-h-[200px]"
            />
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label htmlFor="thumbImage" className="block text-gray-700 font-medium mb-2">
              Upload Thumbnail
            </label>
            <input
              type="file"
              id="thumbImage"
              onChange={(e) => setThumbImage(e.target.value)}
              accept="image/png, image/jpg, image/jpeg"
              className="w-full px-4 py-3 border border-gray-300 rounded-md cursor-pointer focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all duration-300"
          >
            Update Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
