import styles from "./GuestActions.module.css";
import SearchIcon from "../../../../shared/assets/icons/search.svg?react";
import BellIcon from "../../../../shared/assets/icons/bell.svg?react";
import ProfileIcon from "../../../../shared/assets/icons/profile.svg?react";

interface GuestActionsProps {
  onLogin: () => void;
}

const GuestActions = ({ onLogin }: GuestActionsProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <SearchIcon />
        <span className={styles.span}>Поиск</span>
      </button>
      <button className={styles.button}>
        <BellIcon />
      </button>
      <button className={styles.button} onClick={onLogin}>
        <ProfileIcon />
      </button>
    </div>
  );
};

export default GuestActions;
