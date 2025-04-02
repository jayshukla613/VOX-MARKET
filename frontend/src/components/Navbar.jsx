"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ShoppingCart, Smartphone, Monitor, Headphones, Gamepad, User } from "lucide-react";
import { IconUser, IconUserCircle } from "@tabler/icons-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
import useCartContext from "@/context/CartContext";
import axios from "axios";
import toast from "react-hot-toast";
import useAppContext from "@/context/AppContext";


const Navbar = (product) => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { cartItems } = useCartContext();
  const { userLoggedIn, logout } = useAppContext();


  const toggleDropdown = () => setOpen(!open);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async () => {
    if (!search) return;

    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:5000/product/getbysearch/${search}`);

      if (response.status === 200) {
        setProducts(response.data);
        toast.success("Products fetched successfully!");
        console.log("Products fetched successfully:", response.data);
      } else {
        console.error("Error fetching products:", response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }









  return (
    <div>
      <nav className="bg-stone-800 text-white p-4">
        <div className="mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Vox Market</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/category" className="hover:text-gray-300">
                Category
              </Link>
            </li>

          </ul>
          <div className="flex items-center space-x-4">

            <input
              type="text"
              value={search}
              onChange={handleInputChange}
              placeholder="Search for products"
              className="text-gray-800 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={(e) => {

                e.preventDefault();
                router.push(`/searchpage/${search}`);
                if (search) { handleSearch(); }
                else { toast.error("Please enter a search term"); }
                setSearch("");
              }}




              disabled={loading}>
              {loading ? "Searching..." : "Search"}

            </button>
            {
              userLoggedIn ? (
                <button onClick={logout} className="rounded-lg px-4 py-2 text-white bg-black">Logout</button>
              ) : (
                <>
                  <button
                    className="bg-black text-white px-8 font-bold py-2 rounded"
                    onClick={() => {
                      router.push("/user-login");
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    onClick={() => {
                      router.push("/user-signup");
                    }}
                  >
                    Sign up
                  </button>

                </>

              )
            }
            <button>
              Cart
              {cartItems.length}
            </button>
            <Link href="/user/cart">
              <ShoppingCart size={24} className="text-white" />
            </Link>
            <Dropdown>
              {/* The Trigger component for the dropdown */}
              <DropdownTrigger>
                <IconUserCircle />
              </DropdownTrigger>

              {/* The menu that will display when the dropdown is triggered */}
              <DropdownMenu className="bg-gray-100 text-black p-4 rounded shadow-lg">
                <DropdownSection>
                  <DropdownItem key="seller" className="h-10 gap-2 hover:bg-gray-200 hover:scale-105">
                    <Link href="/seller-login">
                      Seller Account
                    </Link>
                  </DropdownItem>

                  <DropdownItem key="seller-intro" className="h-10 gap-2">
                    <Link href="/seller/seller-introducepage">Seller Registration</Link>
                  </DropdownItem>

                  <DropdownItem key="admin" className="h-10 gap-2 hover:bg-gray-200  hover:scale-105">
                    <Link href="/admin/admindashboard">Admin Account</Link>
                  </DropdownItem>

                  <DropdownItem key="user" className="h-10 gap-2 hover:bg-gray-200  hover:scale-105">
                    <Link href="/user-login">User Account</Link>
                  </DropdownItem>


                </DropdownSection>
              </DropdownMenu>
            </Dropdown>




          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
