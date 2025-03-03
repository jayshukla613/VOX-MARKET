import Footeruserpage from '@/components/Footeruserpage'
import Ordercard from '@/components/Ordercard'
import Sidebaruser from '@/components/Sidebaruser'
import React from 'react'


const Cart = () => {
  return (
    <div>
      <div className="container mx-auto p-4">



        <div className="bg-white p-8 mt-4 rounded-lg shadow-lg">
        
          <div className="text-center mt-4 text-2xl font-semibold">My Account</div>
          <div className="flex mt-8">
            <Sidebaruser />
            <div className="w-3/4 pl-8">
              <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Cart Items */}
                  <div className="w-full lg:w-3/4 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
                    <div className="space-y-4">
                      {/* Item 1 */}
                     <Ordercard/>
                      {/* Item 2 */}
                     <Ordercard/>
                      {/* Item 3 */}
                     <Ordercard/>
                    </div>
                  </div>
                  {/* Order Summary */}
                  <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>$160.00</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Tax</p>
                        <p>$16.00</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Shipping</p>
                        <p>$10.00</p>
                      </div>
                      <div className="flex justify-between font-semibold text-lg">
                        <p>Total</p>
                        <p>$186.00</p>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footeruserpage />
      </div>
    </div>
  )
}

export default Cart