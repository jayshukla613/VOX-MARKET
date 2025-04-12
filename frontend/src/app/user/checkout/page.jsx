'use client';

import axios from "axios";
import useCartContext from "@/context/CartContext";
import { useFormik } from 'formik';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import * as yup from "yup";

const validation = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone number is required"),
  address: yup.string().required('address is required'),
  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
  pincode: yup.string().required('pincode is required'),
  country: yup.string().required('country is required')
})


export default function CheckoutPage({ }) {

    const { cartItems } = useCartContext();

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
            const data = {
                items: cartItems,
                address: values

            }
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/add`, )
          .then((result) => {
            console.log(result.data)
            toast.success("Product added to cart successfully!");


            
          }).catch((err) => {
            console.log(err)
            toast.error("Error adding product to cart")

            
          });
        },
        validationSchema: validation
      });
    
      console.log(formikform.errors)

    const [product, setproduct] = useState([]);
    const { id } = useParams();



    const [paymentMethod, setPaymentMethod] = useState("creditCard");

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
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="border p-4 rounded-lg shadow-md">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-32 h-32 object-cover mb-4"
                    />
                    <p><strong>Product Name:</strong> {product.name}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Quantity:</strong> {product.quantity}</p>
                    <p><strong>Total:</strong> ${product.price * product.quantity}</p>
                </div>
            </div>

            {/* Shipping Details */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
                <div className=' flex justify-center '>
      <form onSubmit={formikform.handleSubmit}>
        <div className="mb-6">
      
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formikform.values.name}
              onChange={formikform.handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
            />
            {formikform.errors.name && formikform.touched.name && (
              <div className="text-red-500">{formikform.errors.name}</div>
            )}
            <input
              type="email"
              name="email"
              value={formikform.values.email}
              onChange={formikform.handleChange}
              placeholder="Email Address"
              className="w-full p-2 border rounded-md"
            />
            {
              formikform.errors.email && formikform.touched.email && (
                <div className="text-red-500">{formikform.errors.email}</div>
              )
            }
            <input
              type="tel"
              name='phone'
              value={formikform.values.phone}
              onChange={formikform.handleChange}
              placeholder="Phone Number"
              className="w-full p-2 border rounded-md"
            />
            {
              formikform.errors.phone && formikform.touched.phone && (
                <div className="text-red-500">{formikform.errors.phone}</div>
              )
            }
            <input
              type="text"
              name="address"
              value={formikform.values.address}
              onChange={formikform.handleChange}
              placeholder="Street Address"
              className="w-full p-2 border rounded-md"
            />
            {
              formikform.errors.address && formikform.touched.address && (
                <div className="text-red-500">{formikform.errors.address}</div>
              )
            }
            <div className="flex space-x-4">
              <input
                type="text"
                name="city"
                value={formikform.values.city}
                onChange={formikform.handleChange}

                placeholder="City"
                className="w-1/2 p-2 border rounded-md"
              />
              {
                formikform.errors.city && formikform.touched.city && (
                  <div className="text-red-500">{formikform.errors.city}</div>
                )

              }
              <input
                type="text"
                name='state'
                value={formikform.values.state}
                onChange={formikform.handleChange}
                placeholder="State/Province"
                className="w-1/2 p-2 border rounded-md"
              />
              {
                formikform.errors.state && formikform.touched.state && (
                  <div className="text-red-500">{formikform.errors.state}</div>
                )
              }
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                name="pincode"
                value={formikform.values.pincode}
                onChange={formikform.handleChange}
                placeholder="ZIP/Postal Code"
                className="w-1/2 p-2 border rounded-md"
              />
              {
                formikform.errors.pincode && formikform.touched.pincode && (
                  <div className="text-red-500">{formikform.errors.pincode}</div>
                )
              }
              <input
                type="text"
                name="country"
                value={formikform.values.country}
                onChange={formikform.handleChange}
                placeholder="Country"
                className="w-1/2 p-2 border rounded-md"
              />
              {
                formikform.errors.country && formikform.touched.country && (
                  <div className="text-red-500">{formikform.errors.country}</div>
                )
              }
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* <Link href="/buyproductpage/paymentmode">submit</Link> */}
            <Link href="">submit</Link>
          </button>
        </div>
      </form>



    </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
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

            {/* Checkout Button */}
            <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
            >
                Place Order
            </button>
        </div>
    );
}