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
  ];

  const authLinks = [
    {
      image: iconDog,
      title: "Upload",
      href: "/upload",
    },
    {
      image: iconGiraffe,
      title: "Adopt",
      href: "/adopt",
    },
    {
      image: iconHorse,
      title: "Home",
      href: "/",
    },
  ];
  
  if (document.cookie) {
    return authLinks;
  } else {
    return notAuthLinks;
  }
};

export default getNavigation;
