import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import { UserActions } from "../user-actions";
import { Logo } from "@/shared/ui/Logo";
import { HeaderNavigation } from "../Navigation";
import styles from "./Header.module.css";
import clsx from "clsx";

export const Header: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <header className={clsx(styles.header)}>
      <Link
        to={`/`}
        className={clsx(styles.link)}
      >
        <Logo />
      </Link>
      <HeaderNavigation></HeaderNavigation>
      <UserActions
        isAuth={isAuth}
        onLogin={() => setIsAuth(true)}
        onLogout={() => setIsAuth(false)}
      />
    </header>
  );
};
