import React from "react";
import styles from "./ArticlePreviewHot.module.css";

const ArticlePreviewHot = (props) => {
  return (
    <div className={styles.box}>
      <img
        src="https://play-lh.googleusercontent.com/xBxW8Uolo6-MN9hxxhpUYbxZRr9izx2G-LBL0T6av3-JJfYXvTnkTNLpFh276d11yeAv=w512"
        alt="게시물 이미지"
        className={styles.image}
      />
      <div className={styles.data_box}>
        <h2 className={styles.title}>
          CSS의 동작원리에 대해서 - 1부 (부제: CSS란 무엇인가? 그 역사에 대해서)
        </h2>
        <p className={styles.date}>2022/06/12</p>
      </div>
    </div>
  );
};

export default ArticlePreviewHot;
