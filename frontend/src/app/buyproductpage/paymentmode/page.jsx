import Link from 'next/link'
import React from 'react'

const paymentmode = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
                <h1 className="text-2xl font-bold mb-6">Payment Method Selection</h1>
                {/* Payment Methods */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
                    <div className="space-y-4">
                        <div>
                            <input
                                type="radio"
                                id="creditCard"
                                name="paymentMethod"
                                className="mr-2"
                            />
                            <label htmlFor="creditCard" className="font-medium">
                                Credit/Debit Card
                            </label>
                            <div className="mt-2 ml-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    className="w-full p-2 border rounded-md"
                                />
                                <div className="flex space-x-4">
                                    <input
                                        type="text"
                                        placeholder="Expiration Date (MM/YY)"
                                        className="w-1/2 p-2 border rounded-md"
                                    />
                                    <input
                                        type="text"
                                        placeholder="CVV/CVC"
                                        className="w-1/2 p-2 border rounded-md"
                                    />
                                <input
                                    type="text"
                                    placeholder="Cardholder Name"
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="paypal"
                                name="paymentMethod"
                                className="mr-2"
                            />
                            <label htmlFor="paypal" className="font-medium">
                                PayPal
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="bankTransfer"
                                name="paymentMethod"
                                className="mr-2"
                            />
                            <label htmlFor="bankTransfer" className="font-medium">
                                Bank Transfer
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="mobilePayment"
                                name="paymentMethod"
                                className="mr-2"
                            />
                            <label htmlFor="mobilePayment" className="font-medium">
                                Mobile Payment (e.g., Apple Pay, Google Pay)
                            </label>
                        </div>
                        <div>
                            <input type="radio" id="cod" name="paymentMethod" className="mr-2" />
                            <label htmlFor="cod" className="font-medium">
                                Cash on Delivery (COD)
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="otherMethods"
                                name="paymentMethod"
                                className="mr-2"
                            />
                            <label htmlFor="otherMethods" className="font-medium">
                                Other Payment Methods (e.g., Stripe, Klarna)
                            </label>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary/Details</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Total Amount:</span>
          <span>$100.00</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Item 1</span>
            <span>$40.00</span>
          </div>
          <div className="flex justify-between">
            <span>Item 2</span>
            <span>$30.00</span>
          </div>
          <div className="flex justify-between">
            <span>Item 3</span>
            <span>$20.00</span>
          </div>
          <div className="flex justify-between">
            <span>Item 4</span>
            <span>$10.00</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Tax Amount:</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Shipping Charges:</span>
          <span>$5.00</span>
        </div>
      </div>
    </div>
    
 
    {/* Terms and Conditions Acceptance */}
    <div className="mb-6">
      <input type="checkbox" id="terms" className="mr-2" />
      <label htmlFor="terms" className="font-medium">
        I agree to the Terms and Conditions
      </label>
    </div>
    {/* Payment Confirmation */}
    <div className="text-center">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
        <Link href="/buyproductpage/thnkupage">submit/pay</Link>
      </button>
    </div>
  </div>
            
                </div>
                
            )
}

            export default paymentmode
