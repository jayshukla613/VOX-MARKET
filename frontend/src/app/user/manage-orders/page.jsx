'use client'
export default function ManageUser() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 transition-all duration-300 hover:scale-105">Manage Users</h1>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="border-b hover:bg-gray-50 transition-all duration-300 hover:shadow-md">
              <td className="p-3">John Doe</td>
              <td className="p-3">johndoe@example.com</td>
              <td className="p-3">Admin</td>
              <td className="p-3 flex justify-center space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300">Edit</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300">Delete</button>
              </td>
            </tr>
            {/* Add more rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
}