import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
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
