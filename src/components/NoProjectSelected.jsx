import Button from "./Button";
import img from "../assets/no-projects.png";
import styles from "../styles/noproj.module.css";

export default function NoProjectSelected({ onClickAdd }) {
  return (
    <div className="flex flex-col justify-center">
      <p className="uppercase text-stone-700">
        No Project Selected Please Select Or Add a project
      </p>
      <img
        className={styles.imageCss + ` flex flex-row justify-center`}
        src={img}
        alt="No Project Selected image"
      />
      <Button onClick={onClickAdd}>Create Project</Button>
    </div>
  );
}
