'use client';
import React from 'react';

const AdminProfile = () => {
  // Example data for admin profile (can be dynamic based on your app's state or props)
  const adminData = {
    name: "John Doe",
    username: "johndoe123",
    email: "johndoe@example.com",
    phoneNumber: "+1 234 567 890",
    role: "System Administrator",
    skills: ["Networking", "Cloud Computing", "Linux", "Security Management"],
    certifications: ["CompTIA A+", "Cisco CCNA"],
    profilePicture: "https://via.placeholder.com/150", // Example image URL
    lastLogin: "2025-03-01 14:30",
    totalLogins: 120,
    accessLevel: "Admin",
    modules: ["User Management", "Server Monitoring", "Security Management"],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <img
          src={adminData.profilePicture}
          alt={`${adminData.name}'s Profile`}
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{adminData.name}</h2>
          <p className="text-sm text-gray-600">{adminData.role}</p>
          <p className="text-sm text-gray-600">@{adminData.username}</p>
          <p className="text-sm text-gray-600">Email: {adminData.email}</p>
          <p className="text-sm text-gray-600">Phone: {adminData.phoneNumber}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Skills & Expertise</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {adminData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {adminData.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Admin Activity</h3>
          <p className="text-gray-700">Last Login: {adminData.lastLogin}</p>
          <p className="text-gray-700">Total Logins: {adminData.totalLogins}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Access & Permissions</h3>
          <p className="text-gray-700">Access Level: {adminData.accessLevel}</p>
          <p className="text-gray-700">Modules Accessed:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {adminData.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
