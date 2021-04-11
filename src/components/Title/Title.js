import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={styles.Title}>
      <h1>{props.children}</h1>
      <div className={styles.Line}></div>
    </div>
  );
};

export default Title;
