import Button from "./Button";
import { useState } from "react";

export default function NewTask({ onTaskAdd }) {
  const [inpVal, setInpVal] = useState("");

  function changeText(event) {
    setInpVal(event.target.value);
  }
  function addTask(event) {
    setInpVal("");
    onTaskAdd(inpVal);
  }
  return (
    <>
      <input onChange={changeText} value={inpVal} type="text" />
      <Button onClick={addTask}>Add New Task</Button>
    </>
  );
}
