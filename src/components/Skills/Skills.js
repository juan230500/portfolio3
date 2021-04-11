import SkillGroup from "./SkillGroup/SkillGroup";
import SkillIcon from "./SkillIcon/SkillIcon";

import Title from "../Title/Title";
import styles from "./Skills.module.css";

const Skills = (props) => {
  return (
    <div className={styles.Skills}>
      <Title>Skills</Title>
      <div className={styles.Container}>
        <SkillGroup title="Front-end" icon="laptop">
          <SkillIcon title="HTML5" stars="4.5"></SkillIcon>
          <SkillIcon title="CSS" stars="4.5"></SkillIcon>
          <SkillIcon title="Sass" stars="4"></SkillIcon>
          <SkillIcon title="Bootstrap" stars="4"></SkillIcon>
          <SkillIcon title="Javascript" stars="4.5"></SkillIcon>
          <SkillIcon title="Typescript" stars="4"></SkillIcon>
          <SkillIcon title="Jest" stars="3.5"></SkillIcon>
          <SkillIcon title="NPM" stars="4"></SkillIcon>
          <SkillIcon title="React" stars="5"></SkillIcon>
          <SkillIcon title="React Native" stars="5"></SkillIcon>
          <SkillIcon title="Angular" stars="3"></SkillIcon>
          <SkillIcon title="Webpack" stars="3.5"></SkillIcon>
          <SkillIcon title="Github" stars="5"></SkillIcon>
        </SkillGroup>
        <SkillGroup title="Design" icon="design">
          <SkillIcon title="Responsive" stars="4"></SkillIcon>
          <SkillIcon title="Figma" stars="4.5"></SkillIcon>
          <SkillIcon title="UX/UI" stars="4"></SkillIcon>
          <SkillIcon title="Usability" stars="4"></SkillIcon>
        </SkillGroup>
        <SkillGroup title="Back-end" icon="data">
          <SkillIcon title="Rest API" stars="4"></SkillIcon>
          <SkillIcon title="Nodejs" stars="4"></SkillIcon>
          <SkillIcon title="SQL" stars="4"></SkillIcon>
          <SkillIcon title="GraphQL" stars="3.5"></SkillIcon>
          <SkillIcon title="PostgreSQL" stars="4"></SkillIcon>
          <SkillIcon title="Express" stars="3.5"></SkillIcon>
          <SkillIcon title="MongoDB" stars="3.5"></SkillIcon>
          <SkillIcon title="AWS" stars="4"></SkillIcon>
          <SkillIcon title="Django" stars="3.5"></SkillIcon>
        </SkillGroup>
        <SkillGroup title="Data Science" icon="chart">
          <SkillIcon title="Python" stars="4.5"></SkillIcon>
          <SkillIcon title="Numpy" stars="3.5 "></SkillIcon>
          <SkillIcon title="Pandas" stars="3.5"></SkillIcon>
          <SkillIcon title="Matplot" stars="5"></SkillIcon>
          <SkillIcon title="Sklearn" stars="4.5"></SkillIcon>
          <SkillIcon title="Excel" stars="5"></SkillIcon>
          <SkillIcon title="Machine Learning" stars="5"></SkillIcon>
        </SkillGroup>
      </div>
    </div>
  );
};

export default Skills;
