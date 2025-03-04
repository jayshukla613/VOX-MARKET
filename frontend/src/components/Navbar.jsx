"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ShoppingCart, Smartphone, Monitor, Headphones, Gamepad, User } from "lucide-react";
import { IconUserCircle } from "@tabler/icons-react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";

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
            <li>
              <Link href="/" className="hover:text-gray-300">
               Category
              </Link>
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
          
            <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
           size={32}
            className=""
            description="@tonyreichert"
            name="Tony Reichert"
          />
        </DropdownTrigger>
        <DropdownMenu className="bg-white italic font-semibold p-4" aria-label="User Actions" variant="flat">
          <DropdownItem key="user" className="h-10 gap-2 " >
           <Link href="/user-login">User Account</Link> </DropdownItem>
          <DropdownItem key="seller registration" className="h-10 gap-2 " >
           <Link href="/seller/seller-introducepage">Seller Registration </Link> </DropdownItem>

          <DropdownItem key="seller" className="h-10 gap-2" >
           <Link href="/seller-login">Seller Account</Link> </DropdownItem>
          <DropdownItem key="admin" className="h-10 gap-2" >
           <Link href="/admin/admindashboard">Admin Account</Link> </DropdownItem>
          
          
        </DropdownMenu>
      </Dropdown>
            </div >
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
