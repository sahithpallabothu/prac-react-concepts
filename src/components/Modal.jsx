import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="p-10 bg-slate-400" ref={dialogRef}>
      {children}
      <form method="dialog">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
