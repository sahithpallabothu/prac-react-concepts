import NewTask from "./NewTask";

export default function Tasks({ taskList, onTaskAdd, onTaskDelete }) {
  let content;
  if (taskList.length === 0) {
    content = <p>This project doest have tasks</p>;
  } else {
    content = (
      <ul>
        {taskList &&
          taskList.map((x) => (
            <li key={x.id}>
              <p>
                {x.text}
                <span>
                  <button
                    className=" mx-1 bg-red-500"
                    onClick={() => {
                      onTaskDelete(x.id);
                    }}
                  >
                    Clear
                  </button>
                </span>
              </p>
            </li>
          ))}
      </ul>
    );
  }
  return (
    <>
      <section>
        <h2>Tasks</h2>
        <NewTask onTaskAdd={onTaskAdd} />
        {content}
      </section>
    </>
  );
}
