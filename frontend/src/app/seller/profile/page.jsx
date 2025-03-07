'use client'
import { useState ,useEffect} from "react";

import Sellerdashboard from "@/components/Sellerdashboard";
import axios from "axios";



export default function SellerProfile() {
 const [sellerdata, setsellerdata] = useState(null);
    const token = typeof window !== 'undefined' ? localStorage.getItem('seller-token') : null;

    const getsellerProfileData = () => {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/seller/getdetails`, {
        headers: { 'x-auth-token': token }
      })
        .then((result) => {
          console.log("API Response:", result.data);
          setsellerdata(result.data);
        })
        .catch((err) => console.log("Error fetching profile data:", err));
    };
  
    useEffect(() => {
      if (token) getsellerProfileData();
    }, [token]);
  
    
  // const [isEditing, setIsEditing] = useState(false);
  // const [profile, setProfile] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   storeName: "",
  //   profileImage: null,
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfile((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file && file.type.startsWith("image/")) {
  //     setProfile((prev) => ({ ...prev, profileImage: URL.createObjectURL(file) }));
  //   } else {
  //     alert("Please upload a valid image file.");
  //   }
  // };

  return (
    <div  className="flex flex-col md:flex-row">
      <Sellerdashboard/>

       <div className="flex-1 p-6">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Seller Account</h1>
      </header>
      {/* Seller Information */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            alt="Profile picture of the seller"
            className="w-24 h-24 rounded-full"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/JziZH711k-MMaWppSn-n4PhaPwEmm330bkRN5igX0Ts.jpg"
            width={100}
          />
          <div>
            {
              sellerdata ? (
                <>
                  <h2 className="text-xl font-semibold"></h2>
                  <h1 className="text-gray-600">{sellerdata.email}</h1>
                  <h1 className="text-gray-600">{sellerdata.phone}</h1>
                  <h1 className="text-gray-600">{sellerdata.storeName}</h1>
                  <h1 className="text-gray-600">{sellerdata.createdAt}</h1>
                  <h1 className="text-gray-600">{sellerdata.address}</h1>
                </>
              ) : (
                <><h1>loading .....</h1></>
              )
            }
          </div>
        </div>
      </section>
      {/* Seller Statistics */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-2xl font-bold mt-2">$12,345</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Products Listed</h3>
          <p className="text-2xl font-bold mt-2">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Orders Received</h3>
          <p className="text-2xl font-bold mt-2">1,234</p>
        </div>
      </section>
      {/* Recent Orders */}
      <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">#12345</td>
                <td className="py-2 px-4 border-b">Product Name 1</td>
                <td className="py-2 px-4 border-b">2023-10-01</td>
                <td className="py-2 px-4 border-b text-green-600">Completed</td>
                <td className="py-2 px-4 border-b">$100</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#12346</td>
                <td className="py-2 px-4 border-b">Product Name 2</td>
                <td className="py-2 px-4 border-b">2023-10-02</td>
                <td className="py-2 px-4 border-b text-yellow-600">Pending</td>
                <td className="py-2 px-4 border-b">$200</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#12347</td>
                <td className="py-2 px-4 border-b">Product Name 3</td>
                <td className="py-2 px-4 border-b">2023-10-03</td>
                <td className="py-2 px-4 border-b text-red-600">Cancelled</td>
                <td className="py-2 px-4 border-b">$150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Product Listings */}
      <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Product Listings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              alt="Image of Product 1"
              className="w-full h-48 object-cover rounded-lg"
              height={200}
              src="https://storage.googleapis.com/a1aa/image/6oRnKBRybW6RsxGOjgZX9DjL-k-JRF9VswE5h-C3K1Q.jpg"
              width={300}
            />
            <h4 className="text-lg font-semibold mt-2">Product Name 1</h4>
            <p className="text-gray-600">$50</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              alt="Image of Product 2"
              className="w-full h-48 object-cover rounded-lg"
              height={200}
              src="https://storage.googleapis.com/a1aa/image/KV3AxbRHY1V0AFZsthKZb7xusyyj-LxmkObjmKiC8O4.jpg"
              width={300}
            />
            <h4 className="text-lg font-semibold mt-2">Product Name 2</h4>
            <p className="text-gray-600">$75</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              alt="Image of Product 3"
              className="w-full h-48 object-cover rounded-lg"
              height={200}
              src="https://storage.googleapis.com/a1aa/image/wBRj65PgL3jk-g426l2ykedfO3UGgyJAlVYdXcadsGA.jpg"
              width={300}
            />
            <h4 className="text-lg font-semibold mt-2">Product Name 3</h4>
            <p className="text-gray-600">$100</p>
          </div>
        </div>
      </section>
    </div>
  </div>
    
  )}

