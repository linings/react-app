import React, { useContext, useEffect, useState } from "react";

import styles from "./index.module.css";
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";
import Profile from "../profile";
import getUserData from '../../utils/getUserData'
import getCookie from "../../utils/cookie";


const Header = () => {
  const [userInfo, setUserInfo] = useState({});

  const isAdmin = localStorage.getItem('isAdmin');
  const links = getNavigation(isAdmin);

  const isMessages = async () => {
    let id = getCookie('x-auth-token');
    let userInfo = await getUserData(id);

    setUserInfo(userInfo);
  }

  useEffect(() => {
    isMessages();
  }, []);

  return (
    <header className={styles.navigation}>
      <Profile message={userInfo.response} />
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
