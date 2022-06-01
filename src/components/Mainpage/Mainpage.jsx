import React from "react";
import styles from "./Mainpage.module.css";

const Mainpage = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.banner_textbox}>
          <p className={styles.subtitle}>여기에 부제목</p>
          <p className={styles.title}>여기에 제목</p>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
