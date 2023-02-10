// Node modules
import { createPortal } from "react-dom";

export default function Modal({ state }) {
  const [modal, setModal] = state;

  // Properties
  const HTMLElement = document.getElementById("portal");

  // Safeguard
  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div onClick={() => setModal(null)} className="background">
        {/* Empty on purpose */}
      </div>
      <div className="window">{modal}</div>
    </div>,
    HTMLElement
  );
}
