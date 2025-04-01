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
    }

    return <AppContext.Provider value={{
        userLoggedIn,
        setUserLoggedIn,
        logout
    }}>{children}</AppContext.Provider>;
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;