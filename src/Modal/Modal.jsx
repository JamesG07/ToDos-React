import { createPortal } from "react-dom";
import "./Modal.css";
export default function Modal({ children }) {
  return createPortal(
    <div className='container-modal'>{children}</div>,
    document.getElementById("modal")
  );
}
