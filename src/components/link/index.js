import React from "react";

import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const LinkComponent = ({ style, title, href, image }) => {

  return (
    href === '/upload' ?
      <div className={styles[`list-item-${style}`]}>
          {image ? <img className={styles.icon} alt="icon" src={image} /> : null}
          <DropdownButton variant="info" className={styles['drop-down-text']} title="Upload to database">
            <Dropdown.Item  href="/upload/cats">Cats</Dropdown.Item>
            <Dropdown.Item  href="/upload/dogs">Dogs</Dropdown.Item>
            <Dropdown.Item  href="/upload/stories">Stories</Dropdown.Item>
          </DropdownButton>
      </div>
      :
      <div className={styles[`list-item-${style}`]}>
        <Link className={styles[style]} to={href}>
          {image ? <img className={styles.icon} alt="icon" src={image} /> : null}
          {title}
        </Link>
      </div>
  );
};

export default LinkComponent;
