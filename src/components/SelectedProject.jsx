import Tasks from "./Tasks";

export default function SelectedProject({
  proj,
  onDelete,
  onTaskAdd,
  onTaskDelete,
  taskList,
}) {
  let isDeleted = false;
  const formattedDate = new Date(proj.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });

  function handleDelete() {
    onDelete(proj.id);
  }

  return (
    <div className="w-[35rem] mt-16 bg-slate-200 px-5 flex flex-col ">
      <header>
        <div>
          <h1>Title:{proj.title}</h1>
          <button
            onClick={handleDelete}
            className=" px-5 py-2 rounded-md text-stone-800 hover:text-stone-50 bg-red-600"
          >
            Delete
          </button>
        </div>
        <p>Date:{formattedDate}</p>
        <p>Description:{proj.desc}</p>
      </header>
      <Tasks
        taskList={taskList}
        onTaskAdd={onTaskAdd}
        onTaskDelete={onTaskDelete}
      />
    </div>
  );
}
