'use client';
import { createContext, useContext, useState } from 'react';

const BuyContext = createContext();

export const BuyProvider = ({ children }) => {
    const [buyNowProduct, setBuyNowProduct] = useState(null);

    // Function to set the product for "Buy Now"
    const handleBuyNow = (product) => {
        setBuyNowProduct(product);
    };

    return (
        <BuyContext.Provider value={{ buyNowProduct, handleBuyNow }}>
            {children}
        </BuyContext.Provider>
    );
};

const useBuyContext = () => useContext(BuyContext);

export default useBuyContext;