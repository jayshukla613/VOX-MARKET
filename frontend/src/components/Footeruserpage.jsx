import React from 'react'

const Footeruserpage = () => {
  return (
    <div>
      <div className="flex justify-around mt-8">
      <div className="text-center">
        <img
          alt="Free Shipping Icon"
          className="mx-auto"
          height={50}
          src="https://storage.googleapis.com/a1aa/image/uOCVQBXSLdWeuNP6ilL1hxv-KwbvWtAK_44L2iuHMpU.jpg"
          width={50}
        />
        <div className="mt-2">Free Shipping</div>
        <div className="text-gray-600">Free shipping for order above $50</div>
      </div>
      <div className="text-center">
        <img
          alt="Flexible Payment Icon"
          className="mx-auto"
          height={50}
          src="https://storage.googleapis.com/a1aa/image/65dtN_XSzn3uD5smsTAtCRx4Jf-96ayLljQ8hPt_5KU.jpg"
          width={50}
        />
        <div className="mt-2">Flexible Payment</div>
        <div className="text-gray-600">Multiple secure payment options</div>
      </div>
      <div className="text-center">
        <img
          alt="24x7 Support Icon"
          className="mx-auto"
          height={50}
          src="https://storage.googleapis.com/a1aa/image/FtQ01MRmySYLIjF9BOd7jbpgBwb3nLYVe_r9Do_VqCk.jpg"
          width={50}
        />
        <div className="mt-2">24x7 Support</div>
        <div className="text-gray-600">We support online all days.</div>
      </div>
    </div>
    <div className="bg-gray-100 p-8 mt-8 rounded-lg text-center">
      <div className="text-2xl font-semibold">
        Subscribe to Our Newsletter to
      </div>
      <div className="text-2xl font-semibold text-green-600">
        Get Updates on Our Latest Offers
      </div>
      <div className="text-gray-600 mt-2">
        Get 25% off on your first order just by subscribing to our newsletter
      </div>
      <div className="mt-4 flex justify-center">
        <input
          className="p-2 border rounded-l-lg"
          placeholder="Enter Email Address"
          type="email"
        />
        <button className="bg-yellow-400 p-2 rounded-r-lg hover:bg-yellow-500">
          Subscribe
        </button>
      </div>
    </div>
    </div>
  )
}

export default Footeruserpage
