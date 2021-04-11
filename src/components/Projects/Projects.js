import Title from "../Title/Title";
import styles from "./Projects.module.css";
import data from "./data.json";
import { useState } from "react";
import Button from "../Button/Button";
import Project from "./Project/Project";

const Projects = (props) => {
  const [show, setShow] = useState(false);
  const items = data.projects.map((el) => <Project {...el}></Project>);

  return (
    <div className={styles.Projects}>
      <Title>Projects ({data.projects.length})</Title>
      <div className={styles.Container}>{show ? items : items.slice(0, 4)}</div>
      {!show && (
        <Button onClick={() => setShow(true)} title="Show all"></Button>
      )}
    </div>
  );
};

export default Projects;
