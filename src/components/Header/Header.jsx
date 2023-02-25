import React from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>React Cooking SPA</h1>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.header__item}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.header__item}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export { Header };
