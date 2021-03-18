import React, { useContext } from "react";

import styles from "./index.module.css";
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";
import UserContext from "../../context";
import Profile from "../profile";


const Header = () => {
  const contex = useContext(UserContext);
  const links = getNavigation(contex.user);

  return (
    <header className={styles.navigation}>
      <Profile />
      {links.map((navElement) => {
        return (
          <LinkComponent
            style={'header-link'}
            image={navElement.image}
            key={navElement.title}
            title={navElement.title}
            href={navElement.href}
            type="header"
          />
        );
      })}
    </header>
  );
};

export default Header;
