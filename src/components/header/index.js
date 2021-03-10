import React from "react";

import styles from "./index.module.css";
import logo1 from "../../public/cat-logo.jpg";
import logo2 from "../../public/squirrel-logo.jpg";
import logo3 from "../../public/flamingo-logo.jpg";
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";

const Header = () => {
  const links = getNavigation();

  return (
    <header className={styles.navigation}>
      <img className={styles.logo1} src={logo1} alt="shelter"></img>
      <img className={styles.logo2} src={logo2} alt="shelter"></img>
      <img className={styles.logo3} src={logo3} alt="shelter"></img>
      {links.map((navElement) => {
        return (
          <LinkComponent
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
