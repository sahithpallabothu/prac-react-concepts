import { useState } from "react";
import Button from "./Button";
export default function Sidebar({ onClickAdd, projDetails, onSelectProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onClickAdd}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projDetails &&
          projDetails.map((proj) => (
            <li key={proj.id}>
              <button
                onClick={() => {
                  onSelectProject(proj.id);
                }}
                className="w-full rounded-sm p-2 my-2 text-left text-stone-200 bg-stone-600 hover:bg-stone-400 hover:text-stone-800"
              >
                {proj.title}
              </button>
            </li>
          ))}
      </ul>
    </aside>
  );
}
