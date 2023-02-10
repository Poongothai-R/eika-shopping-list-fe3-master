// Project files
import { createContext, useContext, useState } from "react";
import { loadData } from "../scripts/storeData";

// The 5 steps of context api
// 1 Create a context api and set the initial state
// 2 Create COMPONENT Provider
// 3 Create COMPONENT Custom hook
// 4 Connect the provider to index.js
// 5 Utilize the custom hook inside any part of the "Eika shopping list" project

// 1 Create a context api and set the initial state
const Context = createContext(null);

// 2 Create COMPONENT Provider (this file is imported by index.js)
export function ItemsProvider({ children }) {
  // Local state
  const [items, setItems] = useState(loadData("eika-shopping-list"));

  // Properties
  const value = { items, setItems };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// 3 Create COMPONENT Custom hook (this file is imported by any component that requires items or setItems)
export function useItems() {
  const context = useContext(Context);
  const errorMessage = "To use The Items Context import it on index.js";

  // Safeguard
  if (!context) throw new Error(errorMessage);

  return context;
}
