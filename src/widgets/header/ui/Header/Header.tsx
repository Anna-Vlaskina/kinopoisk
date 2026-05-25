import GuestActions from "../GuestActions";
import UserActions from "../UserActions";
import Logo from "../../../../shared/ui/Logo";
import Navigation from "../Navigation";
import styles from "./Header.module.css";

const isAuth = true;

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation></Navigation>

      {isAuth ? <GuestActions /> : <UserActions />}
    </header>
  );
};

export default Header;
