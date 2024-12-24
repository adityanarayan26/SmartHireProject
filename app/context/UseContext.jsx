"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ContextStore = createContext();
export const UseContext = () => {
  return useContext(ContextStore);
};

const ContextProvider = ({ children }) => {
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize state with localStorage data
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setStoreData(storedUser);
    }
  }, []); // Run once after component mounts

  return (
    <ContextStore.Provider value={{ storeData, setStoreData }}>
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
