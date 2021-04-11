import styles from "./Button.module.css";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFilePdf,
  FaWhatsapp,
} from "react-icons/fa";

const Button = (props) => {
  let icon = null;
  switch (props.icon) {
    case "github":
      icon = <FaGithub className={styles.Icon}></FaGithub>;
      break;
    case "email":
      icon = <FaEnvelope className={styles.Icon}></FaEnvelope>;
      break;
    case "linkedin":
      icon = <FaLinkedin className={styles.Icon}></FaLinkedin>;
      break;
    case "cv":
      icon = <FaFilePdf className={styles.Icon}></FaFilePdf>;
      break;
    case "whatsapp":
      icon = <FaWhatsapp className={styles.Icon}></FaWhatsapp>;
      break;

    default:
      break;
  }
  return (
    <button onClick={props.onClick} className={styles.Button}>
      {icon}
      {icon && <div className={[styles.Line, styles.Text].join(" ")}></div>}
      <p className={styles.Text}>{props.title}</p>
    </button>
  );
};

export default Button;
