export default function LogoutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800">You have been logged out</h2>
        <p className="text-gray-600 mt-2">Thank you for visiting. You can log in again anytime.</p>
        <a
          href="/user-login"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}
