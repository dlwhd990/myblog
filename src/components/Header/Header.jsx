import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_box}>로고</div>
      <div className={styles.login_box}>
        <button className={styles.login_button}>로그인</button>
      </div>
    </header>
  );
};

export default Header;
