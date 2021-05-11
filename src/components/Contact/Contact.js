import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./Contact.module.css";
import pdf from "../../assets/CV.pdf";

const Contact = (props) => {
  return (
    <div className={styles.Contact}>
      <Title>Contact</Title>
      <div className={styles.Container}>
        <Button
          onClick={() => {
            window.open(pdf, "_blank");
          }}
          icon="cv"
          title="Curriculum"
        ></Button>
        <Button
          onClick={() => {
            window.location.href = "mailto:juanpo.alvarado@gmail.com";
          }}
          icon="email"
          title="Email"
        ></Button>
        <Button
          onClick={() => {
            window.open("https://api.whatsapp.com/send?phone=+50683410553");
          }}
          icon="whatsapp"
          title="Whatsapp"
        ></Button>
        <Button
          onClick={() => {
            window.open("https://github.com/juan230500");
          }}
          icon="github"
          title="Github"
        ></Button>
        <Button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/juan-pablo-alvarado-924849146/"
            );
          }}
          icon="linkedin"
          title="LinkedIn"
        ></Button>
      </div>
    </div>
  );
};

export default Contact;
