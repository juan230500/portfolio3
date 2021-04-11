import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.Project}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        more info
      </a>
    </div>
  );
};

export default Project;
