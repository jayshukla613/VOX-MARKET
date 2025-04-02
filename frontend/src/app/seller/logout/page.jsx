'use client'
import useAppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function SellerLogout() {

  const  router=useRouter()

  const { sellerLoggedIn, sellerlogout } = useAppContext();

  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Are you sure you want to log out?</h2>
        <p className="text-gray-600 mt-2">You will need to log in again to access your seller account.</p>
        <div className="mt-6 flex gap-4">
        {
              sellerLoggedIn ? (
                <button onClick={sellerlogout} className="rounded-lg px-4 py-2 text-white bg-black">Logout</button>
              ) : null
            }

            

           
           
          
          <a href="/seller/profile" className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition">
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
}

