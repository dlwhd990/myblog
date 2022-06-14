import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const [scroll, setScroll] = useState(0);

  const changeScrollValue = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScrollValue);
    return () => {
      window.removeEventListener("scroll", changeScrollValue);
    };
  });
  return (
    <header
      className={
        scroll >= 70
          ? `${styles.header} ${styles.scrolled}`
          : `${styles.header}`
      }
    >
      <div className={styles.logo_box}>JONG</div>
      <nav>
        <ul className={styles.nav_list}>
          <li>내 블로그</li>
          <li>인기글</li>
          <li>문의</li>
        </ul>
      </nav>
      <div className={styles.login_box}>
        <button className={styles.login_button}>로그인</button>
      </div>
    </header>
  );
};

export default Header;
