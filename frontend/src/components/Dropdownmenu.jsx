"use client";
import { useState, useRef, useEffect } from "react";
import { User, Settings, ShoppingCart, Bell, HelpCircle, LogOut, ChevronDown } from "lucide-react";

export default function Dropdown() {
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
    <div className=" text-right" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-gray-400 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none"
      >
        <ChevronDown size={20} />
      </button> 

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <ul className="py-2">
            <li>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                <User size={18} /> Profile
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Settings size={18} /> Settings
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                <ShoppingCart size={18} /> My Orders
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Bell size={18} /> Notifications
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                <HelpCircle size={18} /> Help & Support
              </a>
            </li>
            <li>
              <hr className="border-gray-200 my-2" />
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100">
                <LogOut size={18} /> Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
