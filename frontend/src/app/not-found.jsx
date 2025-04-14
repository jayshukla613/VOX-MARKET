import React from 'react';
import { useRouter } from 'next/navigation';

function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default NotFound;