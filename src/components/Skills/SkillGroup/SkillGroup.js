import {
  FaLaptopCode,
  FaChartBar,
  FaDatabase,
  FaPencilRuler,
} from "react-icons/fa";

import styles from "./SkillGroup.module.css";

const SkillGroup = (props) => {
  let icon = null;
  switch (props.icon) {
    case "laptop":
      icon = <FaLaptopCode className={styles.Icon}></FaLaptopCode>;
      break;
    case "chart":
      icon = <FaChartBar className={styles.Icon}></FaChartBar>;
      break;
    case "data":
      icon = <FaDatabase className={styles.Icon}></FaDatabase>;
      break;
    case "design":
      icon = <FaPencilRuler className={styles.Icon}></FaPencilRuler>;
      break;
    default:
      break;
  }

  return (
    <div className={styles.SkillGroup}>
      {icon}
      <h2>{props.title}</h2>
      <div className={styles.SkillContainer}>{props.children}</div>
    </div>
  );
};

export default SkillGroup;
