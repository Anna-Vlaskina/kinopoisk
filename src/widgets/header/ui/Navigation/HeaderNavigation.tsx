import type { FC } from "react";
import styles from "./HeaderNavigation.module.css";
import clsx from "clsx";

const headerNavigationItems = ["Фильмы", "Сериалы", "Подборки"];

export const HeaderNavigation: FC = () => {
  return (
    <nav className={clsx(styles.navigation)}>
      <ul className={clsx(styles.list)}>
        {headerNavigationItems.map((item) => (
          <li key={item}>
            <button className={clsx(styles.link)}>{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
