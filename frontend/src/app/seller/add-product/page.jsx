'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, UploadCloud, Trash2, Edit } from "lucide-react";

export default function SellerDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProduct((prev) => ({ ...prev, image: file }));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, product]);
    setProduct({ name: "", description: "", price: "", category: "", image: null });
    alert("Product added successfully!");
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Seller Dashboard</h1>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
            min="0"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <div className="flex items-center gap-2 border p-2 rounded mt-1 cursor-pointer">
            <UploadCloud size={20} />
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            <span>{product.image ? product.image.name : "Choose a file"}</span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded flex items-center justify-center gap-2"
        >
          <PlusCircle size={20} /> Add Product
        </button>
      </form>

      <div className="mt-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-600">No products added yet.</p>
        ) : (
          <ul className="space-y-4">
            {products.map((prod, index) => (
              <li key={index} className="flex justify-between items-center bg-white p-4 shadow rounded">
                <div>
                  <p className="font-bold">{prod.name}</p>
                  <p className="text-gray-600">${prod.price}</p>
                </div>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
