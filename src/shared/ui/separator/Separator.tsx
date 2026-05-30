import type { FC } from "react";
import styles from "./Separator.module.css";

const Separator: FC = () => {
  return <span className={styles.separator}>•</span>;
};

export default Separator;
