import styles from "./UserActions.module.css";
import SearchIcon from "@/shared/assets/icons/search.svg?react";
import BellIcon from "@/shared/assets/icons/bell.svg?react";
import ProfileIcon from "@/shared/assets/icons/profile.svg?react";

interface UserActionsProps {
  isAuth: boolean;
  onLogout: () => void;
  onLogin: () => void;
}

const UserActions = ({ isAuth, onLogin, onLogout }: UserActionsProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <SearchIcon />
        <span className={styles.span}>Поиск</span>
      </button>

      <button className={styles.button}>
        <BellIcon />
      </button>

      {isAuth ? (
        <button className={styles.button} onClick={onLogout}>
          <img
            className={styles.image}
            src="https://static.vecteezy.com/system/resources/previews/019/896/012/non_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="Аватар пользователя"
          />
        </button>
      ) : (
        <button className={styles.button} onClick={onLogin}>
          <ProfileIcon />
        </button>
      )}
    </div>
  );
};

export default UserActions;
