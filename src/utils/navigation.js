import React, { useContext } from "react";

import iconDog from "../public/icon-dog.png";
import iconHorse from "../public/icon-horse.png";
import iconGiraffe from "../public/icon-giraffe.png";
import iconElephant from "../public/icon-elephant.png";

const getNavigation = (isAuth) => {
  const notAuthLinks = [
    {
      image: iconHorse,
      title: "Login",
      href: "/login",
    },
    {
      image: iconDog,
      title: `Register`,
      href: "/register",
    },
    {
      image: iconGiraffe,
      title: "Home",
      href: "/",
    },
    {
      image: iconElephant,
      title: "Our Mission",
      href: "/about",
    },
  ];

  const authLinks = [
    {
      image: iconElephant,
      title: "Log out",
      href: "/logout",
    },

    {
      image: iconDog,
      title: "Get involved",
      href: "/getInvolved",
    },
    {
      image: iconGiraffe,
      title: "Our program",
      href: "/ourProgram",
    },
    {
      image: iconHorse,
      title: "Our Mission",
      href: "/about",
    },
  ];
  return isAuth ? authLinks : notAuthLinks;
};

export default getNavigation;