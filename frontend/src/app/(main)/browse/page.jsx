import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$10", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "$30", image: "https://via.placeholder.com/150" },
];

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md text-center">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

const ProductBrowser = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductBrowser;
