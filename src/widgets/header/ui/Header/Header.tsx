import { useState } from "react";
import GuestActions from "../GuestActions";
import UserActions from "../UserActions";
import Logo from "../../../../shared/ui/Logo";
import Navigation from "../Navigation";
import styles from "./Header.module.css";

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation></Navigation>

      {isAuth ? (
        <UserActions onLogout={() => setIsAuth(false)} />
      ) : (
        <GuestActions onLogin={() => setIsAuth(true)} />
      )}
    </header>
  );
};

export default Header;
