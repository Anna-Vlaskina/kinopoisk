import styles from "./Navigation.module.css";

const navigationItems = ["Фильмы", "Сериалы", "Подборки"];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {navigationItems.map((item) => (
          <li key={item}>
            <button className={styles.link}>{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
