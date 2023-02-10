// Node modules
import { useState } from "react";
import { useItems } from "../state/ItemsContext";

export default function Formulary({ setModal }) {
  // Global state
  const { items, setItems } = useItems();

  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  function onSubmit(event, name, price) {
    const newItem = {
      id: items.length,
      name: name,
      price: price,
      imageURL: "",
      isCompleted: false,
    };

    event.preventDefault();
    console.log("Formulary", newItem);
    setItems([...items, newItem]);
    setModal(null);
  }

  // I pinky promise to improve this part after the holiday break
  function validateText() {
    setName(name.trim());
  }

  return (
    <form className="form" onSubmit={(event) => onSubmit(event, name, price)}>
      <h2>Add a new item</h2>
      <label className="input-field">
        <span>Name:</span>
        <input
          autoFocus
          type="text"
          placeholder="Ex: Chair"
          required
          value={name}
          onBlur={() => validateText()}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className="input-field">
        <span>Price:</span>
        <input
          type="number"
          placeholder="Ex: 500"
          required
          min={1}
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
