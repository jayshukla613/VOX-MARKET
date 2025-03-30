'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useBuyContext from '@/context/BuyContext';

const BuyProductPage = () => {
    const { buyNowProduct } = useBuyContext();
    const router = useRouter();

    const [quantity, setQuantity] = useState(1);

    if (!buyNowProduct) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">No Product Selected</h1>
                <p>Please go back and select a product to buy.</p>
                <button
                    onClick={() => router.push('/')}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const handleConfirmPurchase = () => {
        // Handle purchase logic here (e.g., API call to create an order)
        alert(`Purchase confirmed for ${buyNowProduct.name} (Quantity: ${quantity})`);
        router.push('/thank-you'); // Redirect to a thank-you page
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Buy Product</h1>
            <div className="flex flex-col md:flex-row">
                {/* Product Image */}
                <div className="flex-1">
                    <img
                        src={buyNowProduct.image}
                        alt={buyNowProduct.name}
                        className="w-full h-auto mb-4"
                    />
                </div>

                {/* Product Details */}
                <div className="flex-1 md:ml-4">
                    <h2 className="text-2xl font-bold mb-2">{buyNowProduct.name}</h2>
                    <p className="text-gray-600 mb-2">{buyNowProduct.description}</p>
                    <p className="text-red-600 text-xl font-bold mb-2">
                        Price: ${buyNowProduct.price}
                    </p>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            className="border rounded p-2 w-full"
                        />
                    </div>
                    <button
                        onClick={handleConfirmPurchase}
                        className="bg-green-500 text-white px-4 py-2 rounded w-full"
                    >
                        Confirm Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyProductPage;