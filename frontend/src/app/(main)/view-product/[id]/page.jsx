'use client'
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import React, { useState, useEffect, use } from 'react';
import ReviewRating from '../../reviewProduct/page';
import toast from 'react-hot-toast';
import useCartContext from '@/context/CartContext';

const ViewProduct = () => {
<<<<<<< HEAD
  // Removed duplicate declaration of token
=======
  const token = localStorage.getItem('user-token');
>>>>>>> 577e4f23ea30cf56ac453bac3d81f60b757b5587
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]); // State for related products

  const { addItemToCart } = useCartContext();

  const token = localStorage.getItem('user-token');
  const userId = localStorage.getItem('userId');


  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/product/getbyid/${id}`);
          const data = res.data;
          console.log(res.data);
          if (res.data?.category) fetchRelatedProducts(res.data?.category);
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
          toast.error('Failed to load product details.');
        }
      };

      fetchProduct();
    }
  }, [id]);


  const addToCart = () => {
    axios.post(`http://localhost:5000/cart/addtocart`, 
      {
        productId: id,
        name: product.name,
        image: product.image,
        price: product.price,
        offer: product.offer,
        description: product.description


      },
      {
      headers: { 'x-auth-token': token }
    })
    .then((result) => {
      console.log(result.data);
      toast.success("Product added to cart successfully!");
      router.push("/user/cart");

      
    }).catch((err) => {
      console.log(err);
      toast.error("Failed to add product to cart!");

      
    });
  };

  




  const fetchRelatedProducts = async (category) => {
    try {
      const res = await axios.get(`http://localhost:5000/product/getbycategory/${category}`);
      const data = res.data;
      console.log('Related Products:', data); // Debugging
      setRelatedProducts(data); // Set related products
    } catch (error) {
      console.error('Error fetching related products:', error);
      toast.error('Failed to load related products.');
    }
  };

  // Function to handle "Buy Now" button click
  const handleBuyNow = (product) => {
    if(token== null) {
      toast.error('Please login to buy the product!');
      router.push('/user-signup');
      return;
    }
    else{
      addItemToCart(product); // Add the product to the cart
      router.push(`/user/cart`);
    }
 
  };

  // Show a loading message if the product is null
  if (!product) return <div>Loading product details...</div>;

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Product Title */}
       
        {/* Product Images */}
        <div className="flex flex-col md:flex-row mb-4">
          <div className="flex-1">
            <img
              alt={product.name}
              className="w-full mb-4"
              height={600}
              src={product.image}
              width={600}
            />
            <div className="flex space-x-2 overflow-x-auto">
              {product.image1 && (
                <img
                  alt={`${product.name} image 1`}
                  className="w-20 h-20"
                  height={100}
                  src={product.image1}
                  width={100}
                />
              )}
              {product.image2 && (
                <img
                  alt={`${product.name} image 2`}
                  className="w-20 h-20"
                  height={100}
                  src={product.image2}
                  width={100}
                />
              )}
              {product.image3 && (
                <img
                  alt={`${product.name} image 3`}
                  className="w-20 h-20"
                  height={100}
                  src={product.image3}
                  width={100}
                />
              )}
              {product.image4 && (
                <img
                  alt={`${product.name} image 4`}
                  className="w-20 h-20"
                  height={100}
                  src={product.image4}
                  width={100}
                />
              )}
            </div>
          </div>
          <div className="flex-1 md:ml-4">

          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            {/* Price */}
            <div className="mb-4">
        
          
          <p>Categories: {product.category}</p>
          </div>
            <div className="text-2xl font-bold text-red-600 mb-2">Price: {product.price}</div>
            <div className="text-gray-500 line-through mb-2">Was: {product.offer}</div>

            {/* Product Variants */}
            <div className="mb-4">
              <label className="block mb-2">Size: {product.size}</label>
             
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg">Color: {product.color} 
                
                <span
                  className="font-bold"
                  style={{
                    backgroundColor: product.color,
                    width: '20px',
                    height: '20px',
                    display: 'inline-block',
                    borderRadius: '',
                    marginLeft: '10px',
                    
                  }}
                ></span>
                

               </label>


              
            </div>
            {/* Availability/Stock Status */}
            <div className="mb-4 text-green-600">{product.stock}</div>
            {/* Add to Cart / Buy Now Button */}
            <div className="flex space-x-2 mb-4">
              <button
                type="submit"
                // onClick={() => addToCart()}
                onClick={() => addItemToCart(product)}
                
                className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
              >
                Add to Cart
              </button>
<button
  onClick={() => handleBuyNow(product)}
  className="bg-green-500 text-white px-4 py-2 rounded w-full md:w-auto"
>
  Buy Now
</button>
=======
=======
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-green-500 text-white px-4 py-2 rounded w-full md:w-auto"
              >
                Buy Now
                
              </button>
>>>>>>> 5854b272e0d1d6dd5dea1586735ca40f813ad3d7
>>>>>>> 0a802206ae8fd8bc001146863d18022c44385dc8
            </div>

            {/* Return Policy */}
            <div className="mb-4">
              <h2 className="font-bold mb-2">Return Policy: {product.retunepolicy}</h2>
              <p>
                30-day return policy.
                <Link className="text-blue-500" href="">
                  Read more
                </Link>
              </p>
            </div>
            {/* Payment Options */}
            <div className="mb-4">
              <h2 className="font-bold mb-2">Payment Options</h2>
              <p>💳 Credit/Debit Card (Visa, MasterCard, AMEX), 🏦 Net Banking, 🪙 UPI (Google Pay, PhonePe, Paytm, etc.),  🧾 Cash on Delivery (COD), 🌐 PayPal (for international customers)</p>
            </div>
          </div>
        </div>
        {/* Product Description */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Product Description</h2>
          <p>{product.description}</p>
        </div>
        {/* Customer Ratings & Reviews */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Customer Ratings & Reviews</h2>
          <ReviewRating productId={id} />
          
        </div>
        {/* Related Products */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Related Products</h2>
          <div className="mb-4">
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct._id} className="border p-4 rounded shadow">
                    <img
                      alt={relatedProduct.name}
                      className="w-full h-40 object-cover mb-2"
                      src={relatedProduct.image}
                    />
                    <h3 className="text-lg font-bold">{relatedProduct.name}</h3>
                    <p className="text-red-600 font-bold">Price: {relatedProduct.price}</p>
                    <button
                      onClick={() => router.push(`/view-product/${relatedProduct._id}`)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                      View Product
                    </button>
                  </div>
                ))
              ) : (
                <p>No related products found.</p>
              )}
            </div>
          </div>
        </div>
        {/* Product Tags and Categories */}
        
      </div>
    </>
  );
};

export default ViewProduct;
