"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ShoppingCart, Smartphone, Monitor, Headphones, Gamepad } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div>
      <nav className="bg-blue-800 text-white p-4">
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
            {/* Dropdown Menu */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 hover:text-gray-300"
              >
                Category <ChevronDown size={18} />
              </button>

              {open && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <ul className="py-2">
                    <li>
                      <Link href="/category/electronics" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <ShoppingCart size={18} /> Electronics
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/mobiles" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <Smartphone size={18} /> Mobile Phones
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/computers" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <Monitor size={18} /> Computers
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/headphones" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <Headphones size={18} /> Headphones
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/gaming" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <Gamepad size={18} /> Gaming
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded text-black"
            />
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
