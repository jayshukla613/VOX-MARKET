

'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCartContext from '@/context/CartContext'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const CheckoutSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  fullName: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  paymentMethod: Yup.string().required('Please select a payment method'),
  cardNumber: Yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Card number is required').matches(/^\d{16}$/, 'Card number must be 16 digits'),
  }),
  expiry: Yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('Expiry date is required').matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'MM/YY format'),
  }),
  cvv: Yup.string().when('paymentMethod', {
    is: 'card',
    then: (schema) => schema.required('CVV is required').matches(/^\d{3}$/, 'CVV must be 3 digits'),
  }),
})
})

export default function CheckoutPage() {
  const { cartItems, calculateTotalAmount, clearCart } = useCartContext();
  const [isProcessing, setIsProcessing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [paymentstatus, setpaymentstatus] = useState('');
  const [userData, setUserData] = useState(null);
  const [paymentstatus, setpaymentstatus] = useState('');
  const router = useRouter();
  const [orderId, setOrderId] = useState(''); // State to store the generated order ID

  const subtotal = calculateTotalAmount();
  const shipping = subtotal * 0.05;
  const tax = subtotal * 0.1;
  const totalAmount = (subtotal + shipping + tax).toFixed(2);



  const generateOrderId = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/generate-order-id`);
      if (response.data && response.data.orderId) {
        setOrderId(response.data.orderId); // Set the generated order ID
      } else {
        throw new Error('Order ID not returned from the server');
      }
    } catch (error) {
      console.error('Error generating order ID:', error);
      toast.error('Failed to generate order ID!');
    }
  };

  useEffect(() => {
    generateOrderId(); // Generate order ID when the component mounts
  }, []);

  const getUserDetails = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getdetails`, {
      headers: {
        'x-auth-token': localStorage.getItem('user-token'),
      },
    })
      .then((response) => {
        console.log('User details:', response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }

  useEffect(() => {
    // Dynamically load Razorpay script
    getUserDetails();
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async (cb) => {
    // cb();
    // return;
    setIsProcessing(true);
    toast.loading('Processing payment...');

    const { name, email, phone } = userData || {};

    try {
      // Step 1: Create an order on the server
      const { data } = await axios.post('http://localhost:5000/razorpay/create-order', {
        amount: calculateTotalAmount(), // Amount in INR (e.g., 500 INR)
        currency: 'INR',
      });
    const { name, email, phone } = userData || {};

    try {
      // Step 1: Create an order on the server
      const { data } = await axios.post('http://localhost:5000/razorpay/create-order', {
        amount: calculateTotalAmount(), // Amount in INR (e.g., 500 INR)
        currency: 'INR',
      });

      const order = data;

      // Step 2: Open Razorpay payment gateway
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: 'Vox Market',
        description: 'Test Transaction',
        order_id: order.id,
        handler: async (response) => {
          console.log('Payment response:', response);

          // Step 3: Verify payment on the server
          const verifyResponse = await axios.post('http://localhost:5000/razorpay/verify-payment', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
      const order = data;

      // Step 2: Open Razorpay payment gateway
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: 'Vox Market',
        description: 'Test Transaction',
        order_id: order.id,
        handler: async (response) => {
          console.log('Payment response:', response);

          // Step 3: Verify payment on the server
          const verifyResponse = await axios.post('http://localhost:5000/razorpay/verify-payment', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyResponse.data.success) {
            toast.success('Payment successful!');
            setpaymentstatus('success');
            cb();
          } else {
            toast.error('Payment verification failed!');
            setpaymentstatus('failed');
          }
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        theme: {
          color: '#3399cc',
        },
      };
          if (verifyResponse.data.success) {
            toast.success('Payment successful!');
            setpaymentstatus('success');
            cb();
          } else {
            toast.error('Payment verification failed!');
            setpaymentstatus('failed');
          }
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options); // Use Razorpay from the browser SDK
      razorpay.open();
    } catch (error) {
      console.error('Error during payment:', error);
      toast.error('Failed to initiate payment.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = async (values) => {
      const razorpay = new window.Razorpay(options); // Use Razorpay from the browser SDK
      razorpay.open();
    } catch (error) {
      console.error('Error during payment:', error);
      toast.error('Failed to initiate payment.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = async (values) => {

    handlePayment(async () => {
    handlePayment(async () => {
      const order = {
        shippingAddress: `${values.fullName}, ${values.address}, ${values.city}, ${values.postalCode}, ${values.country}`,
        paymentMethod: values.paymentMethod,
        cardDetails:
          values.paymentMethod === 'card'
            ? {
              cardNumber: values.cardNumber,
              expiry: values.expiry,
              cvv: values.cvv,
            }
            : null,
        cardDetails:
          values.paymentMethod === 'card'
            ? {
              cardNumber: values.cardNumber,
              expiry: values.expiry,
              cvv: values.cvv,
            }
            : null,
        items: cartItems,
        status: paymentstatus,
      }

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/add`, order, {
          headers: {
            'x-auth-token': localStorage.getItem('user-token'),
          },
        })
        console.log('Order placed:', response.data)
        toast.success('Order placed successfully!');
        clearCart();
        router.replace('/user/thankyou');

      } catch (error) {
        console.error('Order error:', error)
        toast.error('Error placing order. Please try again.')
      }
    })

  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>

      <Formik
        initialValues={{
          fullName: '',
          address: '',
          city: '',
          postalCode: '',
          country: '',
          paymentMethod: '',
          cardNumber: '',
          expiry: '',
          cvv: '',
        }}
        validationSchema={CheckoutSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label className='font-bold p-1'>Full Name</label><br />
              <Field name="fullName" className="w-full p-3 border-2 border-black rounded-lg" />
              <ErrorMessage name="fullName" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label className='font-bold p-1'>Address</label><br />
              <Field name="address" className="w-full p-3 border-2 border-black rounded-lg" />
              <ErrorMessage name="address" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label className='font-bold p-1'>City</label><br />
              <Field name="city" className="w-full p-3 border-2 border-black rounded-lg" />
              <ErrorMessage name="city" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label className='font-bold p-1'>Postal Code</label><br />
              <Field name="postalCode" className="w-full p-3 border-2 border-black rounded-lg" />
              <ErrorMessage name="postalCode" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label className='font-bold p-1'>Country</label><br />
              <Field name="country" className="w-full p-3 border-2 border-black rounded-lg" />
              <ErrorMessage name="country" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label className='font-bold '>Payment Method</label>
              <div role="group" aria-labelledby="paymentMethod">
                <label>
                  <Field type="radio" name="paymentMethod" value="cod" />
                  {' '}Cash on Delivery
                </label><br />
                <label>
                  <Field type="radio" name="paymentMethod" value="card" />
                  {' '} online payment
                </label>
              </div>
              <ErrorMessage name="paymentMethod" component="div" style={{ color: 'red' }} />
            </div>

            {values.paymentMethod === 'card' && (
              <>

              </>
            )}

            <button disabled={isProcessing} type="submit" style={{ padding: '0.5rem', background: 'black', color: 'white' }}>
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>

            {/* <button
              type='button'
              onClick={handlePayment}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              
            >
              
            </button> */}


          </Form>
        )}
      </Formik>

      <div className="mt-4">
        <div className="p-4 w-full">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary
            </h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order ID</span>
              <span className="text-gray-800 font-semibold">{orderId || 'Generating...'}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-semibold">RS: {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800 font-semibold">RS: {shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-800 font-semibold">RS: {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-800 font-semibold">Total</span>
              <span className="text-gray-800 font-semibold">RS: {totalAmount}</span>
            </div>

          </div>
        </div>
      </div>
    </div>

  )

  )
}