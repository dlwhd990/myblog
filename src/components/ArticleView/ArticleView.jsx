import React from "react";
import styles from "./ArticleView.module.css";

const ArticleView = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.banner_textbox}>
          <p className={styles.subtitle}>여기에 부제목</p>
          <p className={styles.title}>여기에 제목</p>
        </div>
      </div>
    </main>
  );
};

export default ArticleView;
