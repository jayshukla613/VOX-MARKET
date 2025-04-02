'use client'
import useAppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";
export default function LogoutPage() {

    const  router=useRouter()
  
    const { userLoggedIn, logout } = useAppContext();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800">You have been logged out</h2>
        <p className="text-gray-600 mt-2">Thank you for visiting. You can log in again anytime.</p>
        {
            userLoggedIn ? (
                <button onClick={logout} className="rounded-lg px-4 py-2 text-white bg-black">Logout</button>
              ) : null
            }
      </div>
    </div>
  );
}
