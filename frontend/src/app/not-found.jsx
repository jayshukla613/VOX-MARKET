import React from 'react'

const notfound = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-4 md:mx-auto">
    <div className="mb-6 md:mb-0 md:mr-8">
      <img
        alt="Illustration showing the number 404 in a creative design"
        className="mx-auto w-64 md:w-80"
        height={300}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVDx8sFiUppQwy5wjhcHFkRSwqrd1R0nKbA&s"
        width={400}
      />
    </div>
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8">
        Sorry, we can't find the page you're looking for.
      </p>
      <a
        className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg hover:bg-blue-600 transition duration-300"
        href="/"
      >
        <i className="fas fa-home mr-2"></i>
        Return to Homepage
      </a>
    </div>
  </div>
      
    </div>
  )
}

export default notfound
