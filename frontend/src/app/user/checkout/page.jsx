
'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import React from 'react'
import useCartContext from '@/context/CartContext'
import toast from 'react-hot-toast'



const CheckoutSchema = Yup.object().shape({
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

export default function CheckoutPage() {
  const { cartItems,calculateTotalAmount} = useCartContext()

  const handleSubmit = async (values) => {
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
      items: cartItems,
    }

    try {
      const response = await axios.post(`http://localhost:5000/order/add`, order)
      console.log('Order placed:', response.data)
      toast.success('Order placed successfully!');
      
    } catch (error) {
      console.error('Order error:', error)
     toast.error('Error placing order. Please try again.')
    }
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
              <label>Full Name</label><br />
              <Field name="fullName" />
              <ErrorMessage name="fullName" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Address</label><br />
              <Field name="address" />
              <ErrorMessage name="address" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>City</label><br />
              <Field name="city" />
              <ErrorMessage name="city" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Postal Code</label><br />
              <Field name="postalCode" />
              <ErrorMessage name="postalCode" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Country</label><br />
              <Field name="country" />
              <ErrorMessage name="country" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label>Payment Method</label>
              <div role="group" aria-labelledby="paymentMethod">
                <label>
                  <Field type="radio" name="paymentMethod" value="cod" />
                  {' '}Cash on Delivery
                </label><br />
                <label>
                  <Field type="radio" name="paymentMethod" value="card" />
                  {' '}Credit/Debit Card (Mock)
                </label>
              </div>
              <ErrorMessage name="paymentMethod" component="div" style={{ color: 'red' }} />
            </div>

            {values.paymentMethod === 'card' && (
              <>
                <div>
                  <label>Card Number</label><br />
                  <Field name="cardNumber" placeholder="1234 5678 9012 3456" />
                  <ErrorMessage name="cardNumber" component="div" style={{ color: 'red' }} />
                </div>

                <div>
                  <label>Expiry Date (MM/YY)</label><br />
                  <Field name="expiry" placeholder="MM/YY" />
                  <ErrorMessage name="expiry" component="div" style={{ color: 'red' }} />
                </div>

                <div>
                  <label>CVV</label><br />
                  <Field name="cvv" placeholder="123" />
                  <ErrorMessage name="cvv" component="div" style={{ color: 'red' }} />
                </div>
              </>
            )}

            <button type="submit" style={{ padding: '0.5rem', background: 'black', color: 'white' }}>
              Place Order
            </button>
          </Form>
        )}
      </Formik>

      <hr style={{ margin: '2rem 0' }} />

      <div>
       
        
      </div>
    </div>
  )
}
