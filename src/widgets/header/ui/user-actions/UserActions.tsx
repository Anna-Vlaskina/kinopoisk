import styles from "./UserActions.module.css";
import SearchIcon from "@/shared/assets/icons/search.svg?react";
import BellIcon from "@/shared/assets/icons/bell.svg?react";
import ProfileIcon from "@/shared/assets/icons/profile.svg?react";
import { Button } from "@/shared/ui/button";
import type { FC } from "react";
import type { UserActionsProps } from "./UserActions.types";
import clsx from "clsx";

export const UserActions: FC<UserActionsProps> = ({
  isAuth,
  onLogin,
  onLogout,
}: UserActionsProps) => {
  return (
    <div className={clsx(styles.container)}>
      <Button variant="only-icon">
        <SearchIcon />
        <span className={clsx(styles.span)}>Поиск</span>
      </Button>

      <Button variant="only-icon">
        <BellIcon />
      </Button>

      {isAuth ? (
        <Button
          variant="only-icon"
          onClick={onLogout}
        >
          <img
            className={clsx(styles.image)}
            src="https://static.vecteezy.com/system/resources/previews/019/896/012/non_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="Аватар пользователя"
          />
        </Button>
      ) : (
        <Button
          variant="only-icon"
          onClick={onLogin}
        >
          <ProfileIcon />
        </Button>
      )}
    </div>
  );
};
