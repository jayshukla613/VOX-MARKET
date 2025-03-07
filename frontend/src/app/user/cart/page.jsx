'use client'

export default function UserLogout() {

  
  const handleLogout = () => {
    // Perform logout actions (e.g., clear tokens, redirect to login)
    console.log("Seller logged out");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Are you sure you want to log out?</h2>
        <p className="text-gray-600 mt-2">You will need to log in again to access your seller account.</p>
        <div className="mt-6 flex gap-4">
          <button 
            onClick={handleLogout} 
            

            // className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
             <a href="/user/Login" className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition">
            logout 
          </a>
           
          </button>
          {/* <a href="/seller/dashboard" className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition">
            Cancel
          </a> */}
        </div>
      </div>
    </div>
  );
}
