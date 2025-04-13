'use client'
export default function ManageUser() {
    return (


<div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
  <div className="text-5xl mb-4">🛍️</div>

  <h1 className="text-3xl font-bold text-gray-800">
    Thank You for Shopping with Us!
  </h1>

  <p className="text-lg text-gray-600 mt-2">
    We truly appreciate your purchase and hope to see you again soon. 
  </p>

  <div className="mt-6">
    <a href="/category" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">
      Continue Shopping
    </a>
  </div>
</div>
    );
}