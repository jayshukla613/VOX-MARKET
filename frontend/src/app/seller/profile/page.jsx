'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Edit3, Save, Camera } from "lucide-react";

export default function SellerProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    storeName: "John's Store",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfile((prev) => ({ ...prev, profileImage: URL.createObjectURL(file) }));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 flex flex-col items-center p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Seller Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img
            src={profile.profileImage || "/default-avatar.png"}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border"
          />
          {isEditing && (
            <label className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer">
              <Camera size={16} />
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          )}
        </div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Store Name</label>
            <input
              type="text"
              name="storeName"
              value={profile.storeName}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              disabled={!isEditing}
            />
          </div>
        </motion.div>
        <button
          className={`w-full py-2 mt-4 text-white font-bold rounded flex items-center justify-center gap-2 ${isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? <Save size={20} /> : <Edit3 size={20} />} {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </motion.div>
  );
}
