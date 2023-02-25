import React from "react";

//styles
import styles from './Footer.module.scss';

//icons
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>

      <div className={styles.footer__left}>
        <h5 className={styles.footer__date}>@ {new Date().getFullYear()} Cooking SPA</h5>
        <span className={styles.footer__author}>Author: 'Dmitriy S'</span>
      </div>

      <div className={styles.footer__center}>
        <span>Follow us on</span>
        <div className={styles.footer__icons}>
          <a href="https://www.linkedin.com/in/dmitriy-sidortsov-419701228/" target="_blank" rel="noreferrer">
            <AiFillLinkedin className={styles.linkedin}/>
          </a>
          <a href="https://github.com/sidardzmitry" target="_blank" rel="noreferrer">
            <AiFillGithub className={styles.git}/>
          </a>
        </div>
      </div>

    <div className={styles.footer__right}>
      React-Router
    </div>
      </footer>
    </>
  );
};

export { Footer };