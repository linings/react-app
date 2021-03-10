import iconDog from "../public/icon-dog.png";
import iconHorse from "../public/icon-horse.png";
import iconGiraffe from "../public/icon-giraffe.png";
import iconElephant from "../public/icon-elephant.png";

const getNavigation = () => {
  let isAuth = false;

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
      title: "Our Mission",
      href: "/about",
    },
    {
      title: "Get involved",
      href: "/getInvolved",
    },
    {
      title: "Our program",
      href: "/ourProgram",
    },
    {
      title: "Shop",
      href: "/shop",
    },
  ];
  return isAuth ? authLinks : notAuthLinks;
};

export default getNavigation;
