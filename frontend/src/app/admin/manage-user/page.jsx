'use client'
import { useState } from "react";
import { Home, Package, ShoppingCart, Users, DollarSign, FileText, Tag, BarChart, Headphones, Shield, Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const sections = [
  { name: "Dashboard", icon: Home, component: Dashboard },
  { name: "Product Management", icon: Package, component: ProductManagement },
  { name: "Order Management", icon: ShoppingCart, component: OrderManagement },
  { name: "User Management", icon: Users, component: UserManagement },
  { name: "Payment Management", icon: DollarSign, component: PaymentManagement },
  { name: "Content Management", icon: FileText, component: ContentManagement },
  { name: "Discount & Coupon", icon: Tag, component: DiscountCoupon },
  { name: "Reports & Analytics", icon: BarChart, component: ReportsAnalytics },
  { name: "Customer Support", icon: Headphones, component: CustomerSupport },
  { name: "Security & Compliance", icon: Shield, component: SecurityCompliance },
];

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-72 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl p-5 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:h-full`}>
        {/* Sidebar Toggle Button inside Sidebar */}
        <button 
          className="absolute top-5 right-5 bg-white text-blue-600 p-2 rounded-full shadow-lg md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        <h2 className="text-3xl font-bold mb-6 text-center">Admin Panel</h2>
        <nav>
          <button
            className="flex items-center justify-between p-4 w-full bg-blue-700 rounded-lg text-left transition hover:bg-blue-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-white font-semibold">Menu</span>
            {isMenuOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
          {isMenuOpen && (
            <div className="mt-2 bg-blue-500 rounded-md p-2 shadow-md">
              {sections.map(({ name, icon: Icon, component }) => (
                <button
                  key={name}
                  className="flex items-center w-full p-3 rounded-lg text-left hover:bg-blue-600"
                  onClick={() => setActiveSection(name)}
                >
                  <Icon className="w-5 h-5 mr-3" /> {name}
                </button>
              ))}
            </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Menu Button outside Sidebar */}
        <button 
          className="bg-blue-600 text-white p-2 rounded-full shadow-lg mb-4 md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {sections.map(({ name, component }) => (
          activeSection === name ? <div key={name} className="p-4 bg-white rounded-md shadow-md">{component()}</div> : null
        ))}
      </div>
    </div>
  );
}

function Dashboard() {
  return <p className="text-lg text-black">Welcome to the Admin Dashboard. Overview of all data.</p>;
}
function ProductManagement() {
  return <p className="text-lg text-black">Manage Products: Add, Edit, Delete.</p>;
}
function OrderManagement() {
  return <p className="text-lg text-black">Manage Orders: Process, Cancel, Refund.</p>;
}
function UserManagement() {
  return <p className="text-lg text-black">Manage Users: Approve, Ban, View.</p>;
}
function PaymentManagement() {
  return <p className="text-lg text-black">Manage Payments: Transactions, Refunds, Gateway Setup.</p>;
}
function ContentManagement() {
  return <p className="text-lg text-black">Manage Content: Banners, Blogs, Policies.</p>;
}
function DiscountCoupon() {
  return <p className="text-lg text-black">Manage Discounts & Coupons.</p>;
}
function ReportsAnalytics() {
  return <p className="text-lg text-black">View Sales, Traffic, and Reports.</p>;
}
function CustomerSupport() {
  return <p className="text-lg text-black">Handle Support Tickets and Queries.</p>;
}
function SecurityCompliance() {
  return <p className="text-lg text-black">Manage Security Settings and Compliance.</p>;
}
