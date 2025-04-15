'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";





const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  streetaddress: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  postalcode: yup.string().required("Postal code is required"),
  phone: yup.string().required("Phone number is required"),
});

const PaymentPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      streetaddress: "",
      city: "",
      postalcode: "",
      phone: "",
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {


      console.log(values);
      axios.post("http://localhost:5000/user/add", values)
        .then((result) => {
          // console.log(result.data);
          resetForm();
          router.push("/user/payment-success");

        }).catch((err) => {
          console.log(err);
          toast.error("Error saving data");
          setSubmitting(false);

        });
      // Handle form submission here, e.g., send data to your server
    },
    validationSchema: validationSchema,
  })


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row gap-6">
          {/* Left Side - Form Sections */}
          <div className="flex-1 space-y-6">
            {/* Billing Address */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input type="text"
                    placeholder="Full Name"
                    className="name"
                    
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="text-red-500">{formik.errors.name}</div>
                  )}
                </div>

                <div>
                  <input type="email"
                    placeholder="Email"
                    className="input"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="text-red-500">{formik.errors.email}</div>
                  )}
                </div>

                <div className="input col-span-2">
                  <input type="text"
                    placeholder="Street Address"
                    // className="input col-span-2"
                    name="streetaddress"
                    id="streetaddress"
                    onChange={formik.handleChange}
                    value={formik.values.streetaddress}
                  />
                  {formik.errors.streetadress && formik.touched.streetaddress && (
                    <div className="text-red-500">{formik.errors.streetaddress}</div>
                  )}
                </div>

                <div>
                  <input type="text"
                    placeholder="City"
                    className="input"
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                  {formik.errors.city && formik.touched.city && (
                    <div className="text-red-500">{formik.errors.city}</div>
                  )}
                </div>
                <div>
                  <input type="text"
                    placeholder="Postal Code"
                    className="input"
                    id="postalcode"
                    name="postalcode"
                    onChange={formik.handleChange}
                    value={formik.values.postalcode}
                  />
                  {formik.errors.postalcode && formik.touched.postalcode && (
                    <div className="text-red-500">{formik.errors.postalcode}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text"
                  placeholder="Full Name"
                  className="input"
                  id=""
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />

                <input type="tel"
                  placeholder="Phone Number"
                  className="input"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />


                <input type="text"
                  placeholder="Street Address"
                  className="input col-span-2"
                  id="streetaddress"
                  name="streetaddress"
                  onChange={formik.handleChange}
                  value={formik.values.streetaddress}

                />

                <input type="text"
                  placeholder="City"
                  className="input"

                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />

                <input type="text"
                  placeholder="Postal Code"
                  className="input"
                  id="postalcode"
                  name="postalcode"
                  onChange={formik.handleChange}
                  value={formik.values.postalcode}
                />


              </div>
            </div>

            {/* Saved Payment Methods */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Saved Payment Methods</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="accent-gray-600" />
                  <span>Visa ending in 1234</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="accent-gray-600" />
                  <span>MasterCard ending in 5678</span>
                </label>
              </div>
            </div>

            {/* Credit/Debit Card Form */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Add New Card</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Cardholder Name" className="input col-span-2" />
                <input type="text" placeholder="Card Number" className="input col-span-2" />
                <input type="text" placeholder="MM/YY" className="input" />
                <input type="text" placeholder="CVV" className="input" />
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-md h-fit sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$89.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$94.98</span>
              </div>
            </div>
            <button

              type="submit"

              className="mt-6 w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition">
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>

  );
}


export default PaymentPage

// Tailwind utility class for inputs
// Add this inside your global CSS or use @apply in Tailwind
// .input {
//   @apply border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400;
// }
