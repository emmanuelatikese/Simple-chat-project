import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () =>{
    return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("ChatUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing localStorage item 'ChatUser':", error);
      return null;
    }
  });
    return <AuthContext.Provider value={{ authUser, setAuthUser}}>{ children }</AuthContext.Provider>
}