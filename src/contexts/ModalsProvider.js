import React, { useState, createContext } from "react";

export const ModalsContext = createContext(null);

export const ModalsProvider = ({ children }) => {
  const [addEditModal, setAddEditModal] = useState(false);

  return (
    <ModalsContext.Provider
      value={{
        addEditModal,
        setAddEditModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
