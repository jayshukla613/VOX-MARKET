'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const categories = [
  { id: 1, name: "Electronics", image: "https://picsum.photos/300/200?random=1" },
  { id: 2, name: "Fashion", image: "https://picsum.photos/300/200?random=2" },
  { id: 3, name: "Home & Kitchen", image: "https://picsum.photos/300/200?random=3" },
  { id: 4, name: "Sports", image: "https://picsum.photos/300/200?random=4" },
  { id: 5, name: "Toys & Games", image: "https://picsum.photos/300/200?random=5" },
  { id: 6, name: "Beauty & Personal Care", image: "https://picsum.photos/300/200?random=6" },
  { id: 7, name: "Automotive", image: "https://picsum.photos/300/200?random=7" },
  { id: 8, name: "Books", image: "https://picsum.photos/300/200?random=8" },
];

const CategoryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filters = ["All", "Popular", "New Arrivals", "Discounted", "Trending"];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      
      {/* Search and Dropdown */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search categories..."
          className="border p-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        {/* Dropdown List */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center bg-gray-100 px-4 py-2 rounded shadow"
          >
            {selectedFilter} <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          {isOpen && (
            <motion.ul 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bg-white shadow-md mt-2 rounded w-full z-10"
            >
              {filters.map((filter) => (
                <li
                  key={filter}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedFilter(filter);
                    setIsOpen(false);
                  }}
                >
                  {filter}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
      
      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <motion.div 
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center font-semibold">{category.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
