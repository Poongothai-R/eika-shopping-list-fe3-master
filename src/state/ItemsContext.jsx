// Project files
import { createContext, useContext, useEffect, useState } from "react";
import { loadData, saveData } from "../scripts/storeData";

// Initializer
const Context = createContext(null);

// For index.js
export function ItemsProvider({ children }) {
  // Properties
  const storageKey = "eika-shopping-list";

  // Local state
  const [items, setItems] = useState(loadData(storageKey));

  // Properties
  const value = { items, setItems };

  // Methods
  useEffect(() => saveData(storageKey, items), [items]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For every .jsx component using global data
export function useItems() {
  const context = useContext(Context);
  const errorMessage = "To use The Items Context import it on index.js";

  // Safeguard
  if (!context) throw new Error(errorMessage);

  return context;
}
