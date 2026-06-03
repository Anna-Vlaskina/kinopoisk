import type { FC } from "react";
import styles from "./HeaderNavigation.module.css";

const headerNavigationItems = ["Фильмы", "Сериалы", "Подборки"];

export const HeaderNavigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {headerNavigationItems.map((item) => (
          <li key={item}>
            <button className={styles.link}>{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
