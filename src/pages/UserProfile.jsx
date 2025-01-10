import { Link } from 'react-router-dom';
import ProfileImage from '../assets/a8.jpg';
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { useState } from 'react';

export default function UserProfile() {
  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match!");
      setSuccess('');
      return;
    }
    setError('');
    setSuccess("Profile updated successfully!");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-4xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Profile Settings</h2>
          <Link
            to="/myposts/id"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            My Posts
          </Link>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={profileImage ? URL.createObjectURL(profileImage) : ProfileImage}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-300 shadow-md"
            />
            <input
              type="file"
              id="profile-image"
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => setProfileImage(e.target.files[0])}
              className="hidden"
            />
            <label
              htmlFor="profile-image"
              className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full text-white cursor-pointer shadow-md hover:bg-blue-700 transition"
            >
              <FaEdit />
            </label>
          </div>

          {/* Display Name */}
          <h3 className="text-2xl font-semibold text-gray-800">{name || "Your Name"}</h3>

          {/* Success/Error Messages */}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          {/* Profile Update Form */}
          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Current Password */}
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* New Password */}
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Update Button */}
            <button
              type="submit"
              className="w-full py-3 col-span-1 sm:col-span-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
