import { useState } from "react";
import UserActions from "../user-actions";
import Logo from "@/shared/ui/logo";
import Navigation from "../navigation";
import styles from "./Header.module.css";

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation></Navigation>
      <UserActions
        isAuth={isAuth}
        onLogin={() => setIsAuth(true)}
        onLogout={() => setIsAuth(false)}
      />
    </header>
  );
};

export default Header;
