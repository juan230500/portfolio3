import styles from "./SkillIcon.module.css";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Bounce from "react-reveal/Bounce";

const SkillIcon = (props) => {
  let starCount = props.stars;
  const stars = Array(5)
    .fill(0)
    .map((_) => {
      if (starCount > 0.5) {
        starCount -= 1;
        return <FaStar key={Math.random()} className={styles.Icon}></FaStar>;
      }
      if (starCount > 0) {
        starCount -= 0.5;
        return (
          <FaStarHalfAlt
            key={Math.random()}
            className={styles.Icon}
          ></FaStarHalfAlt>
        );
      }
      return (
        <FaRegStar key={Math.random()} className={styles.Icon}></FaRegStar>
      );
    });
  return (
    <Bounce bottom duration={Math.random() * 3000}>
      <div className={styles.SkillIcon}>
        <p>{props.title}</p>
        <div style={{ display: "flex" }}>{stars}</div>
      </div>
    </Bounce>
  );
};

export default SkillIcon;
