'use client';

import axios from "axios";
import useCartContext from "@/context/CartContext";
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from 'yup';

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Required'),

  address: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address must be less than 100 characters')
    .required('Required'),

  city: Yup.string()
    .min(2, 'City name too short')
    .max(50, 'City name too long')
    .required('Required'),

  state: Yup.string()
    .min(2, 'State name too short')
    .max(50, 'State name too long')
    .required('Required'),

  pincode: Yup.string()
    .matches(/^\d{5,6}$/, 'Pincode must be 5 or 6 digits')
    .required('Required'),

  country: Yup.string()
    .min(2, 'Country name too short')
    .max(56, 'Country name too long')
    .required('Required'),
});

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const formikform = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      country: ''
    },
    onSubmit: async (values) => {
      const fullAddress = `${values.name}, ${values.phone}, ${values.address}, ${values.city}, ${values.state} - ${values.pincode}, ${values.country}`;

  const data = {
    items: cartItems,
    address: fullAddress, // ✅ send flat string
    paymentMethod: paymentMethod
  };

      try {
         axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/add`, data, {
          headers: {
            'x-auth-token': localStorage.getItem('user-token')
          }
        });
        toast.success("Order placed successfully!");
        console.log(data);
        
        router.push("/user/thankyou");
      } catch (err) {
        console.error(err);
        toast.error("Error placing order");
      }
    },
    validationSchema: validation
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Product Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover mb-4"
            />
            <p><strong>Product Name:</strong> {item.name}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Total:</strong> ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>

<<<<<<< HEAD
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleCheckout = () => {
        // Handle checkout logic here (e.g., send data to the server)
        alert("Order placed successfully!");
    };


    const fetchProduct = async (id) => {
        axios.get(`http://localhost:5000/product/getbyid/${id}`)
            .then((response) => {
                console.log(response.data);
                setproduct(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            {/* Product Summary */}
 {
      cartItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="flex items-center mb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
              <div className="flex-1">  
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Category: {item.category}</p>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>  
              </div>
            </div>
        </div>
      ))
 }

            {/* Shipping Details */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
                <div className=' flex justify-center '>
      <form onSubmit={formikform.handleSubmit}>
        <div className="mb-6">
      
          <div className="space-y-4">
=======
      {/* Shipping Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <div className='flex justify-center'>
          <form onSubmit={formikform.handleSubmit} className="w-full max-w-2xl space-y-4">
>>>>>>> 577e4f23ea30cf56ac453bac3d81f60b757b5587
            <input
              type="text"
              name="name"
              onChange={formikform.handleChange}
              onBlur={formikform.handleBlur}
              value={formikform.values.name}
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
            />
            {formikform.errors.name && formikform.touched.name && (
              <div className="text-red-500">{formikform.errors.name}</div>
            )}

            <input
              type="email"
              name="email"
              onChange={formikform.handleChange}
              onBlur={formikform.handleBlur}
              value={formikform.values.email}
              placeholder="Email Address"
              className="w-full p-2 border rounded-md"
            />
            {formikform.errors.email && formikform.touched.email && (
              <div className="text-red-500">{formikform.errors.email}</div>
            )}

            <input
              type="tel"
              name="phone"
              onChange={formikform.handleChange}
              onBlur={formikform.handleBlur}
              value={formikform.values.phone}
              placeholder="Phone Number"
              className="w-full p-2 border rounded-md"
            />
            {formikform.errors.phone && formikform.touched.phone && (
              <div className="text-red-500">{formikform.errors.phone}</div>
            )}

            <input
              type="text"
              name="address"
              onChange={formikform.handleChange}
              onBlur={formikform.handleBlur}
              value={formikform.values.address}
              placeholder="Street Address"
              className="w-full p-2 border rounded-md"
            />
            {formikform.errors.address && formikform.touched.address && (
              <div className="text-red-500">{formikform.errors.address}</div>
            )}

            <div className="flex space-x-4">
              <input
                type="text"
                name="city"
                onChange={formikform.handleChange}
                onBlur={formikform.handleBlur}
                value={formikform.values.city}
                placeholder="City"
                className="w-1/2 p-2 border rounded-md"
              />
              <input
                type="text"
                name="state"
                onChange={formikform.handleChange}
                onBlur={formikform.handleBlur}
                value={formikform.values.state}
                placeholder="State/Province"
                className="w-1/2 p-2 border rounded-md"
              />
            </div>
            {(formikform.errors.city && formikform.touched.city) && (
              <div className="text-red-500">{formikform.errors.city}</div>
            )}
            {(formikform.errors.state && formikform.touched.state) && (
              <div className="text-red-500">{formikform.errors.state}</div>
            )}

            <div className="flex space-x-4">
              <input
                type="text"
                name="pincode"
                onChange={formikform.handleChange}
                onBlur={formikform.handleBlur}
                value={formikform.values.pincode}
                placeholder="ZIP/Postal Code"
                className="w-1/2 p-2 border rounded-md"
              />
              <input
                type="text"
                name="country"
                onChange={formikform.handleChange}
                onBlur={formikform.handleBlur}
                value={formikform.values.country}
                placeholder="Country"
                className="w-1/2 p-2 border rounded-md"
              />
            </div>
            {(formikform.errors.pincode && formikform.touched.pincode) && (
              <div className="text-red-500">{formikform.errors.pincode}</div>
            )}
            {(formikform.errors.country && formikform.touched.country) && (
              <div className="text-red-500">{formikform.errors.country}</div>
            )}

            {/* Payment Method */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Payment Method</h2>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  PayPal
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
