'use client'
import Footeruserpage from '@/components/Footeruserpage';
import Sidebaruser from '@/components/Sidebaruser';

import React from 'react'

const viewOrder = () => {
 
  return (
    <div>
      <div className="container mx-auto p-4">


        <div className="bg-white p-8 mt-4 rounded-lg shadow-lg">


          <div className="flex mt-8">
           <Sidebaruser/>
            <div className="max-w-7xl mx-auto p-4">
              {/* Main Content */}
              <div className="flex flex-col lg:flex-row">
                {/* Orders Section */}
                <div className="w-full">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center border-b pb-2 mb-4">
                      <h2 className="text-xl font-bold">Orders (2)</h2>
                      <div className="text-gray-500">Sort by</div>
                    </div>
                    {/* Order 1 */}
                    <div className="border rounded-lg mb-4">
                      <div className="bg-yellow-500 text-white p-4 rounded-t-lg">
                        <div className="flex justify-between">
                          <div>
                            <div>Order #105784512</div>
                            <div>$14.00</div>
                          </div>
                          <div>
                            <div>Payment Method: Paypal</div>
                            <div>Estimated Delivery: 26 July 2014</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-4">
                          <img
                            alt="Fresh Orange"
                            className="w-12 h-12 rounded-full mr-4"
                            height={50}
                            src="https://storage.googleapis.com/a1aa/image/f7msyEjuKmJMhx2fJ_UjndtjiLsUX4tVzJHkUS-szQc.jpg"
                            width={50}
                          />
                          <div>
                            <div className="font-bold">Fresh Orange</div>
                            <div>1kg</div>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          <img
                            alt="Red Tomato"
                            className="w-12 h-12 rounded-full mr-4"
                            height={50}
                            src="https://storage.googleapis.com/a1aa/image/E8FpBiGzMyTAeORHgV4yZSTjzEgtz2nBXEuiAM-YVd4.jpg"
                            width={50}
                          />
                          <div>
                            <div className="font-bold">Red Tomato</div>
                            <div>1kg</div>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          <img
                            alt="Yellow Lemon"
                            className="w-12 h-12 rounded-full mr-4"
                            height={50}
                            src="https://storage.googleapis.com/a1aa/image/PWIWuhdVt-snhC5lf1uSGZOe4IlVHvZAvvyFgtr8OCk.jpg"
                            width={50}
                          />
                          <div>
                            <div className="font-bold">Yellow Lemon</div>
                            <div>1kg</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                            Track Order
                          </button>
                          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                            Cancel Order
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Order 2 */}
                    <div className="border rounded-lg">
                      <div className="bg-yellow-500 text-white p-4 rounded-t-lg">
                        <div className="flex justify-between">
                          <div>
                            <div>Order #105784513</div>
                            <div>$14.00</div>
                          </div>
                          <div>
                            <div>Payment Method: Cash</div>
                            <div>Estimated Delivery: 27 July 2014</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-4">
                          <img
                            alt="Fresh Strawberry"
                            className="w-12 h-12 rounded-full mr-4"
                            height={50}
                            src="https://storage.googleapis.com/a1aa/image/QIlYFtWiS9_sJJuxVfQyvBGWEIZHuCAGYR_xTvcKnzc.jpg"
                            width={50}
                          />
                          <div>
                            <div className="font-bold">Fresh Strawberry</div>
                            <div>1kg</div>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          <img
                            alt="Peach Cranberry"
                            className="w-12 h-12 rounded-full mr-4"
                            height={50}
                            src="https://storage.googleapis.com/a1aa/image/qca-qsuDKL_9VatIdXjryqb1WAckiNc9aoKnJLtnkAQ.jpg"
                            width={50}
                          />
                          <div>
                            <div className="font-bold">Peach Cranberry</div>
                            <div>1kg</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                            Track Order
                          </button>
                          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                            Reorder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
              <Footeruserpage/>
              </div>
             
             
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default viewOrder;