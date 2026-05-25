import styles from "./UserActions.module.css";
import SearchIcon from "../../../../shared/assets/icons/search.svg?react";

const UserActions = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <SearchIcon />
      </button>
      <img
        className={styles.image}
        src="https://static.vecteezy.com/system/resources/previews/019/896/012/non_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
        alt="Аватар пользователя"
      />
    </div>
  );
};

export default UserActions;
