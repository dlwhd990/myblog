import React from "react";
import styles from "./ArticlePreviewLong.module.css";

const ArticlePreviewLong = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.image_box}>
        <img
          src="https://play-lh.googleusercontent.com/xBxW8Uolo6-MN9hxxhpUYbxZRr9izx2G-LBL0T6av3-JJfYXvTnkTNLpFh276d11yeAv=w512"
          alt="게시물 이미지"
        />
      </div>
      <div className={styles.data_box}>
        <p className={styles.subject}>공부</p>
        <h2 className={styles.title}>자바스크립트의 동작원리에 대해서 - 1부</h2>
        <p className={styles.content}>
          오늘은 자바스크립트의 동작원리에 대해서 공부해보았다. 우선 이에 대해
          가장 먼저 알아야 할 점은 자바스크립트의 탄생 배경부터 알아야 할 필요가
          있었다. 오늘은 자바스크립트의 동작원리에 대해서 공부해보았다. 우선
          이에 대해 가장 먼저 알아야 할 점은 자바스크립트의 탄생 배경부터 알아야
          할 필요가 있었다.
        </p>
        <div className={styles.bottom}>
          <p>1.4k Reads</p>
          <p>2022/06/14</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreviewLong;
