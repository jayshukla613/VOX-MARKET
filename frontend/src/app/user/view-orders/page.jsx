'use client';

import Footeruserpage from '@/components/Footeruserpage';
import Ordercard from '@/components/Ordercard';
import Sidebaruser from '@/components/Sidebaruser';
import React from 'react';

const ViewOrder = () => {
  
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 mt-4 rounded-lg shadow-lg">
        <div className="flex mt-8">
          {/* Sidebar */}
          <Sidebaruser />

          <div className="max-w-7xl mx-auto p-4">
            {/* Orders Section */}
            <div className="w-full bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-xl font-bold">Orders (2)</h2>
                <div className="text-gray-500">Sort by</div>
              </div>

              {/* Order 1 */}
              <div className="border rounded-lg mb-4">
                <div className="bg-yellow-500 text-white p-4 rounded-t-lg">
                  <div className="flex justify-between">
                    <div>
                      <p>Order #105784512</p>
                      <p className="font-semibold">$14.00</p>
                    </div>
                    <div>
                      <p>Payment Method: Paypal</p>
                      <p>Estimated Delivery: 26 July 2024</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  {/* Product Item */}
                  <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <img
                        alt="Red T-Shirt"
                        className="w-20 h-20 object-cover rounded-lg"
                        src="https://storage.googleapis.com/a1aa/image/21JcgxxV7BjxP3tD-98tqYgy-sN8oHVosyY81AgDjnM.jpg"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">Red T-Shirt</h3>
                        <p className="text-gray-600">Size: M</p>
                        <p className="text-gray-600">Color: Red</p>
                      </div>
                    </div>

                    <div className="flex items-center mt-4 sm:mt-0">
                      <div className="flex items-center border rounded-lg px-2 py-1">
                        <button className="px-2 text-gray-600 hover:text-gray-800">-</button>
                        <span className="px-4 py-1">1</span>
                        <button className="px-2 text-gray-600 hover:text-gray-800">+</button>
                      </div>
                      <p className="ml-4 text-lg font-semibold">$20.00</p>
                      <button className="ml-4 text-red-600 hover:text-red-800">🗑</button>
                    </div>
                  </div>

                  <Ordercard />

                  {/* Buttons */}
                  <div className="flex justify-between items-center mt-4">
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
                      <p>Order #105784513</p>
                      <p className="font-semibold">$14.00</p>
                    </div>
                    <div>
                      <p>Payment Method: Cash</p>
                      <p>Estimated Delivery: 27 July 2024</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <Ordercard />
                  <Ordercard />

                  {/* Buttons */}
                  <div className="flex justify-between items-center mt-4">
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

            {/* Footer */}
            <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
              <Footeruserpage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
