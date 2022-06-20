import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  const nav = useNavigate();
  const [scroll, setScroll] = useState(0);

  const moveToHome = () => {
    nav("/");
  };

  const moveToLogin = () => {
    nav("/login");
  };

  const moveToLatestAndHot = () => {
    nav("/lnh");
  };

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
      <div className={styles.logo_box} onClick={moveToHome}>
        JONG
      </div>
      <nav>
        <ul className={styles.nav_list}>
          <li>내 블로그</li>
          <li onClick={moveToLatestAndHot}>인기글</li>
          <li>문의</li>
        </ul>
      </nav>
      <div className={styles.login_box}>
        <button className={styles.login_button} onClick={moveToLogin}>
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
