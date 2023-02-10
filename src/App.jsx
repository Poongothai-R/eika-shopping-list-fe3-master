// Node modules
import { useState } from "react";

// Project files
import Logo from "./assets/images/logo.svg";
import Modal from "./components/Modal";
import ShoppingScreen from "./screens/ShoppingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useItems } from "./state/ItemsContext";
import "./styles/style.css";

export default function App() {
  // Global state
  const { items } = useItems();

  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <img className="logo" src={Logo} alt="The word EIKA con a background" />
      {items.length === 0 && <WelcomeScreen setModal={setModal} />}
      {items.length > 0 && <ShoppingScreen setModal={setModal} />}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
