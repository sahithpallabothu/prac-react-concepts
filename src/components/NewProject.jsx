import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAddSaveProj, onCancel }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const dialog = useRef();

  function handleSaveProject() {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const date = dateRef.current.value;
    if (title.trim() === "" || desc.trim() === "" || date.trim() === "") {
      dialog.current.open();
      return;
    }

    onAddSaveProj({ title: title, desc: desc, date: date });
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>OOPS Error!......</p>
        <p>Please Enter Valid Inputs in All fields.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className=" px-5 py-2 rounded-md text-stone-800 hover:text-stone-50 hover:bg-red-600"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input labelName="Title" type="text" ref={titleRef} />
          <Input isTextArea labelName="Description" ref={descRef} />
          <Input labelName="Due Date" type="date" ref={dateRef} />
        </div>
      </div>
    </>
  );
}
