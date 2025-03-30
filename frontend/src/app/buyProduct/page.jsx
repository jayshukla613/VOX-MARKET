'use client'
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const BuyPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-3xl p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Details */}
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <img src="/product.jpg" alt="Wireless Headphones" className="w-24 h-24 rounded-lg" />
              <div>
                <h3 className="text-lg font-medium">Wireless Headphones</h3>
                <p className="text-gray-500">High-quality sound, noise cancellation</p>
                <p className="text-gray-700 font-semibold">$49.99</p>
              </div>
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" defaultValue="1" min="1" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="coupon">Apply Coupon</Label>
              <Input id="coupon" type="text" placeholder="Enter discount code" className="mt-1" />
            </div>
          </CardContent>
          
          {/* Order Summary */}
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>$49.99</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span>-$5.00</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>$49.99</span>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Buy Now</Button>
            </motion.div>
            <p className="text-sm text-gray-500 text-center mt-2">Secure Payment via PayPal, Visa, MasterCard</p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default BuyPage;
