import React, { useEffect, useState } from "react";

import styles from "./index.module.css";
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";
import Profile from "../profile";
import getUserData from '../../utils/getUserData'
import getCookie from "../../utils/cookie";

const Header = () => {
  const isAdmin = localStorage.getItem('isAdmin');
  const links = getNavigation(isAdmin);

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
