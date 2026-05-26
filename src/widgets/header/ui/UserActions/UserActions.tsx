import styles from "./UserActions.module.css";
import SearchIcon from "../../../../shared/assets/icons/search.svg?react";

interface UserActionsProps {
  onLogout: () => void;
}

const UserActions = ({ onLogout }: UserActionsProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <SearchIcon />
      </button>
      <button className={styles.button} onClick={onLogout}>
        <img
          className={styles.image}
          src="https://static.vecteezy.com/system/resources/previews/019/896/012/non_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          alt="Аватар пользователя"
        />
      </button>
    </div>
  );
};

export default UserActions;
