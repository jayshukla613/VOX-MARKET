import { IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Adminsidebar = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white w-64 max-h-full space-y-6 py-7 px-2">
      <div className="text-3xl font-semibold text-center">
        <i className="fas fa-store" />
        <span>Admin</span>
      </div>
      <nav>
        <Link
          href="/admin/manage-user"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
        
          <span className="ml-2">Users</span>
        </Link>
        <Link
          href="/admin/manage-seller"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <i className="fas fa-user-tie" />
          <span className="ml-2">Sellers</span>
        </Link>
        <Link
          href="/admin/Product"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <i className="fas fa-box" />
          <span className="ml-2">Products</span>
        </Link>
        <Link
          href=""
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <i className="fas fa-shopping-cart" />
          <span className="ml-2">Orders</span>
        </Link>
        <Link
          href="/admin/complaines"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <i className="fas fa-chart-line" />
          <span className="ml-2">User Complaines</span>
        </Link>
      </nav>
    </div>
    </div>
  )
}

export default Adminsidebar
