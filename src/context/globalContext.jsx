import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      setEmail(localStorage.getItem("VBemail") || "");
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ email, setEmail }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
