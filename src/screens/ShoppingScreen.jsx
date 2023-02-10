// Node modules
import { useState } from "react";

// Project files
import Formulary from "../components/Formulary";
import Sorter from "../components/Sorter";
import TodoList from "../components/TodoList";
import { useItems } from "../state/ItemsContext";

export default function ShoppingScreen({ setModal }) {
  // Global state
  const { items, setItems } = useItems();

  // Local state
  const [showAdquired, setShowAdquired] = useState(false);

  // Properties
  const adquiredItems = items.filter((item) => item.isCompleted === true);
  const pendingItems = items.filter((item) => item.isCompleted === false);

  // Methods
  function onCheck(id) {
    const clonedItems = [...items];
    const editedItem = clonedItems.find((item) => item.id === id);

    editedItem.isCompleted = !editedItem.isCompleted;
    setItems(clonedItems);
  }

  return (
    <div id="shopping-screen">
      <h1>Shopping Screen</h1>
      <Sorter />
      <TodoList items={pendingItems} onCheck={onCheck} />
      <div className="buttons">
        <button onClick={() => setModal(<Formulary setModal={setModal} />)}>
          Add a new item
        </button>
        <button
          className="secondary"
          onClick={() => setShowAdquired(!showAdquired)}
        >
          Show hidden items
        </button>
      </div>
      {showAdquired && <TodoList items={adquiredItems} onCheck={onCheck} />}
    </div>
  );
}
