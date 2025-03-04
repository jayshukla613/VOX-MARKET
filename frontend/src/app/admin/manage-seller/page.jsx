"use client";
import { useState } from "react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const coupons = [
    { code: "DISCOUNT10", discount: "10%", expires: "2025-12-31" },
    { code: "FREESHIP", discount: "Free Shipping", expires: "2025-06-30" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav className="space-y-2">
          {[
            "dashboard",
            "products",
            "orders",
            "users",
            "coupons",
            "reports",
            "shipping",
            "messages",
            "settings",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-full text-left p-2 rounded ${
                activeTab === tab ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "coupons" && <Coupons coupons={coupons} />}
        {activeTab === "reports" && <Reports />}
        {activeTab === "shipping" && <Shipping />}
        {activeTab === "messages" && <Messages />}
        {activeTab === "settings" && <Settings />}
      </main>
    </div>
  );
}

/* Dashboard */
function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold">Total Sales</h2>
          <p className="text-2xl mt-2">$12,345</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold">Total Orders</h2>
          <p className="text-2xl mt-2">245</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold">Total Users</h2>
          <p className="text-2xl mt-2">1,230</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-bold">Pending Orders</h2>
          <p className="text-2xl mt-2">12</p>
        </div>
      </div>
    </div>
  );
}

/* Coupons Management */
function Coupons({ coupons }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Manage Coupons</h1>
      <table className="w-full bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Code</th>
            <th className="p-2 text-left">Discount</th>
            <th className="p-2 text-left">Expires</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{coupon.code}</td>
              <td className="p-2">{coupon.discount}</td>
              <td className="p-2">{coupon.expires}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Sales Reports */
function Reports() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Sales Reports</h1>
      <p>Coming soon: Graphs & detailed sales reports.</p>
    </div>
  );
}

/* Shipping Management */
function Shipping() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Shipping Management</h1>
      <p>Manage shipping rates and delivery zones.</p>
    </div>
  );
}

/* Customer Messages */
function Messages() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Customer Messages</h1>
      <p>Manage customer inquiries and support tickets.</p>
    </div>
  );
}

/* Settings */
function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Admin Settings</h1>
      <p>Configure store settings, payments, and more.</p>
    </div>
  );
}
