import { useState, type FC } from "react";
import { UserActions } from "../user-actions";
import { Logo } from "@/shared/ui/logo";
import { HeaderNavigation } from "../navigation";
import styles from "./Header.module.css";
import clsx from "clsx";

export const Header: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <header className={clsx(styles.header)}>
      <Logo />
      <HeaderNavigation></HeaderNavigation>
      <UserActions
        isAuth={isAuth}
        onLogin={() => setIsAuth(true)}
        onLogout={() => setIsAuth(false)}
      />
    </header>
  );
};
