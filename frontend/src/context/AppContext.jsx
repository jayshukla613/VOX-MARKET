'use client';

import { useRouter } from "next/navigation";

const { createContext, useContext, useState } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();

    const [userLoggedIn, setUserLoggedIn] = useState(() => {
        const token = localStorage.getItem("user-token");
        return token ? true : false;
    });

    const logout = () => {
        localStorage.removeItem("user-token");
        setUserLoggedIn(false);
        router.replace("/user-login");
        localStorage.removeItem("cartItems");
    }

    const [sellerLoggedIn, setsellerLoggedIn] = useState(() => {
        const token = localStorage.getItem("seller-token");
        return token ? true : false;
    });

    const sellerlogout = () => {
        document.cookie = "seller-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem("seller-token");
        setsellerLoggedIn(false);
        router.replace("/seller-login");
    }

  

    return <AppContext.Provider value={{
        userLoggedIn,
        setUserLoggedIn,
        logout,
        sellerLoggedIn,
        setsellerLoggedIn,
        sellerlogout    
        
    }}>{children}</AppContext.Provider>;
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;