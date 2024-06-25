import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token , setToken] = useState(localStorage.getItem("token"));

    const storeTokenInLS = (serverToken)=>{
        // settoken set nato karyo aetle reaload ntu thatu
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    };

    let isLoggedIn = !!token;
    console.log("isloggenin",isLoggedIn);

    // logout functinality
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    };

    


    return (
    <AuthContext.Provider value={{isLoggedIn , storeTokenInLS , LogoutUser}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used ");
    }

    return authContextValue;
};