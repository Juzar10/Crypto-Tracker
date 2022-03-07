import { useContext } from "react";
import { Children, createContext } from "react";
import { useState } from "react";

const crytoListContext = createContext();
const crytoListSetContext = createContext();

export function useCrytoList() {
  return useContext(crytoListContext);
}

export function useCrytoListSet() {
  return useContext(crytoListSetContext);
}

export function CrytoListProvider({ children }) {
  const [cryptoList, setCrytoList] = useState({
    "BTC-USD": 0,
    "ETH-USD": 0,
    "DOGE-USD": 0,
    "SHIB-USD": 0,
  });

  return (
    <crytoListContext.Provider value={cryptoList}>
      <crytoListSetContext.Provider value={setCrytoList}>
        {children}
      </crytoListSetContext.Provider>
    </crytoListContext.Provider>
  );
}
