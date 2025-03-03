import React from 'react'

const Ordercard = () => {
  return (
    <div>
       <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center">
                          <img
                            alt="Image of a stylish red t-shirt"
                            className="w-20 h-20 object-cover rounded-lg"
                            height={100}
                            src="https://storage.googleapis.com/a1aa/image/21JcgxxV7BjxP3tD-98tqYgy-sN8oHVosyY81AgDjnM.jpg"
                            width={100}
                          />
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold">Red T-Shirt</h3>
                            <p className="text-gray-600">Size: M</p>
                            <p className="text-gray-600">Color: Red</p>
                          </div>
                        </div>
                        <div className="flex items-center mt-4 sm:mt-0">
                          <div className="flex items-center border rounded-lg">
                            <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
                              <i className="fas fa-minus"></i>
                            </button>
                            <span className="px-4 py-1">1</span>
                            <button className="px-2 py-1 text-gray-600 hover:text-gray-800">
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <p className="ml-4 text-lg font-semibold">$20.00</p>
                          <button className="ml-4 text-red-600 hover:text-red-800">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
    </div>
  )
}

export default Ordercard
