'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";

<<<<<<< HEAD
=======

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Required'),
>>>>>>> 6a626ff7444da4e25110aa3f778291e783c78b99




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
<<<<<<< HEAD
  const formik = useFormik({
=======
  const { cartItems,calculateTotalAmount} = useCartContext();
   


  

  const formikform = useFormik({
>>>>>>> 6a626ff7444da4e25110aa3f778291e783c78b99
    initialValues: {
      fullname: "",
      email: "",
      streetaddress: "",
      city: "",
      postalcode: "",
      phone: "",
    },
<<<<<<< HEAD
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
=======
    onSubmit: async (values) => {
      console.log(values);
      

      

>>>>>>> 6a626ff7444da4e25110aa3f778291e783c78b99
    },
    validationSchema: validationSchema,
  })




  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/add`, {
        ...formikform.values,
        cartItems,
        totalAmount: calculateTotalAmount(),
      });
      toast.success('Order placed successfully!');
      router.push('/user/order');
      console.log('Order response:', response.data);
      
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order!');
    }
  }
  const handleSubmit = async () => {
    
    formikform.handleSubmit();
    handlePlaceOrder();
   





  };




  return (
    <div>
<<<<<<< HEAD
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

=======
     <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Checkout</h1>
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Billing Details */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">shipping Details</h2>
        <form onSubmit={formikform.handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="first-name"
                type="text"
                name="name"
                onChange={formikform.handleChange}
                value={formikform.values.name}
              />
              {formikform.touched.name && formikform.errors.name ? (
                <div className="text-red-500 text-sm">{formikform.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="last-name"
              >
                Phone Number
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                name="phone"
                onChange={formikform.handleChange}
                value={formikform.values.phone}

                type="number"
              />
              {formikform.touched.phone && formikform.errors.phone ? (
                <div className="text-red-500 text-sm">{formikform.errors.phone}</div>
              ) : null}
            </div>
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="email"
                name="email"
                onChange={formikform.handleChange}
                value={formikform.values.email}
                type="email"
              />
              {formikform.touched.email && formikform.errors.email ? (
                <div className="text-red-500 text-sm">{formikform.errors.email}</div>
              ) : null}
            </div>
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="address"
                type="text"
                name="address"
                onChange={formikform.handleChange}
                value={formikform.values.address}

              />
              {formikform.touched.address && formikform.errors.address ? (
                <div className="text-red-500 text-sm">{formikform.errors.address}</div>
              ) : null}
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="city"
                name="city"
                onChange={formikform.handleChange}
                value={formikform.values.city}
                type="text"
              />
              {formikform.touched.city && formikform.errors.city ? (
                <div className="text-red-500 text-sm">{formikform.errors.city}</div>
              ) : null}

            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="state"
              >
                State
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="state"
                name="state"
                onChange={formikform.handleChange}
                value={formikform.values.state}

                type="text"
              />
              {formikform.touched.state && formikform.errors.state ? (
                <div className="text-red-500 text-sm">{formikform.errors.state}</div>
              ) : null}

            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="zip"
              >
                Zip Code
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="zip"
                name="pincode"
                onChange={formikform.handleChange}
                value={formikform.values.pincode}

                type="text"
              />

              {formikform.touched.pincode && formikform.errors.pincode ? (
                <div className="text-red-500 text-sm">{formikform.errors.pincode}</div>
              ) : null}

            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="country"
              >
                Country
              </label>
              <input
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-lg p-2"
                id="country"
                name="country"
                onChange={formikform.handleChange}
                value={formikform.values.country}

                type="text"
              />
              {formikform.touched.country && formikform.errors.country ? (
                <div className="text-red-500 text-sm">{formikform.errors.country}</div>
              ) : null}

            </div>
          </div>
          
        </form>
      </div>
      {/* Order Summary */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex flex-col gap-4">
         
         
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600">RS..{item.price}</p>
                </div>
              </div>
              <p className="text-lg font-medium">Quantity{item.quantity}</p>
            </div>
          ))}
          {/* Total Amount */}






          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">Subtotal</p>
              <p className="text-lg font-medium">Rs.. {calculateTotalAmount().toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">Shipping</p>
              <p className="text-lg font-medium">RS..20.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium">Total</p>
              <p className="text-lg font-bold">RS...{calculateTotalAmount().toFixed(2)}</p>
            </div>
          </div>
          <button type="submit"  onClick={ ()=>{
            handleSubmit();
            formikform.resetForm();
          

          }} className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-medium hover:bg-blue-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
    </div>
>>>>>>> 6a626ff7444da4e25110aa3f778291e783c78b99
  );
}


export default PaymentPage

// Tailwind utility class for inputs
// Add this inside your global CSS or use @apply in Tailwind
// .input {
//   @apply border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-400;
// }
