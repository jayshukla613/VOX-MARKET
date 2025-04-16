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
        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-8mZGDCqEsxCa5N5gNSoih6lB.png?st=2025-04-16T00%3A16%3A45Z&se=2025-04-16T02%3A16%3A45Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T04%3A51%3A18Z&ske=2025-04-16T04%3A51%3A18Z&sks=b&skv=2024-08-04&sig=8xHcjUzBMBQu3ZvyISPOpJj4s0aw%2Bi%2B9cIZRAzNW23w%3D"
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
