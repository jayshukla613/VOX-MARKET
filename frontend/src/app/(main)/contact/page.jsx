'use client'
import { useState } from "react";

export default function ContactHelp() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResponse(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponse("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            required
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {response && <p className="text-center text-green-500 mt-2">{response}</p>}
      </div>

      {/* Help Center */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center">Help Center</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How do I track my order?</summary>
            <p className="text-gray-600 mt-2">Log into your account and visit the 'Orders' page.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">What is your return policy?</summary>
            <p className="text-gray-600 mt-2">We accept returns within 30 days of purchase.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">How do I contact customer support?</summary>
            <p className="text-gray-600 mt-2">Email us at support@yourstore.com or call +1 (555) 123-4567.</p>
          </details>
        </div>
      </div>
    </div>
  );
}
