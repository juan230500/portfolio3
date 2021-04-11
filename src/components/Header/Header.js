import styles from "./Header.module.css";
import logo from "../../assets/header.svg";
import Bounce from "react-reveal/Bounce";

const Header = (props) => {
  return (
    <header className={styles.Header}>
      <Bounce top>
        <div className={styles.Column}>
          <img src={logo} alt="logo"></img>
        </div>
      </Bounce>
      <Bounce bottom>
        <div className={styles.Column}>
          <h1>Juan Pablo Alvarado</h1>
          <div className={styles.Line}></div>
          <h1>Fullstack developer</h1>
        </div>
      </Bounce>
    </header>
  );
};

export default Header;
