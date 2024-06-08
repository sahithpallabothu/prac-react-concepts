import Sidebar from "./components/Sidebar";
import styles from "./styles/App.module.css";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projDetails, setProjDetails] = useState({
    selectedProj: undefined,
    projects: [],
    taskList: [],
  });

  function handleDeleteTask(taskId) {
    setProjDetails((prevState) => {
      return {
        ...prevState,
        taskList: prevState.taskList.filter((x) => x.id !== taskId),
      };
    });
  }

  function handleTaskAdd(text) {
    const taskId = Math.random();

    setProjDetails((prevState) => {
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProj,
        text: text,
      };
      return {
        ...prevState,
        taskList: [...prevState.taskList, newTask],
      };
    });
  }

  function handleAddProject() {
    setProjDetails((prevState) => ({
      ...prevState,
      selectedProj: null,
    }));
  }

  function handleCancelProject() {
    setProjDetails((prevState) => ({
      ...prevState,
      selectedProj: undefined,
    }));
  }

  function handleSelectedProject(id) {
    setProjDetails((prevState) => ({
      ...prevState,
      selectedProj: id,
    }));
  }

  function handleDeleteProject(id) {
    // const projectsList = {
    //   ...projDetails,
    //   projects: projDetails.projects.map((x) => ({ ...x })),
    // };
    // console.log(projectsList);
    // const idx_ele = projectsList.projects.findIndex((x) => x.id === id);
    // projectsList.projects.splice(idx_ele, 1);
    setProjDetails((prevState) => ({
      ...prevState,
      selectedProj: undefined,
      projects: projDetails.projects.filter((x) => x.id !== id),
    }));
  }

  function handleNewProjDetails(projData) {
    const id = Math.random();
    const newProj = {
      ...projData,
      id: id,
    };
    setProjDetails((prevstate) => ({
      ...prevstate,
      selectedProj: undefined,
      projects: [...prevstate.projects, newProj],
    }));
  }
  let content;
  if (projDetails.selectedProj === null) {
    content = (
      <NewProject
        onAddSaveProj={handleNewProjDetails}
        onCancel={handleCancelProject}
      />
    );
  } else if (projDetails.selectedProj === undefined) {
    content = <NoProjectSelected onClickAdd={handleAddProject} />;
  } else {
    content = (
      <SelectedProject
        onDelete={handleDeleteProject}
        onTaskAdd={handleTaskAdd}
        onTaskDelete={handleDeleteTask}
        taskList={projDetails.taskList.filter(
          (x) => x.projectId === projDetails.selectedProj
        )}
        proj={projDetails.projects.find(
          (x) => x.id === projDetails.selectedProj
        )}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onClickAdd={handleAddProject}
        onSelectProject={handleSelectedProject}
        projDetails={projDetails.projects}
      />
      {content}
    </main>
  );
}

export default App;
