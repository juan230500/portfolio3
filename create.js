const fs = require("fs");

const BASE = "./src";
const path = process.argv[2];
const name = process.argv[3];

const fullPath = `${BASE}/${path}/${name}`;

fs.mkdirSync(`${fullPath}`);
fs.writeFileSync(
  `${fullPath}/${name}.js`,
  `import styles from "./${name}.module.css"

const  ${name} = (props) => {
  return <div className={styles.${name}}>${name}</div>
};

export default  ${name};
`
);

fs.writeFileSync(
  `${fullPath}/${name}.module.css`,
  `.${name}{}
`
);
