import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function Context({ children }) {
  const [data, setData] = useState();
  const contextValue = {
    data,
    setData,
  };

  return (
    <>
      <GlobalContext.Provider value={contextValue}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export function contextUse() {
  const contextValue = useContext(GlobalContext);
  return contextValue;
}
