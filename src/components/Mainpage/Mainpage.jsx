import React from "react";
import styles from "./Mainpage.module.css";

const Mainpage = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.top_banner}>
        <div className={styles.top_banner_content}>
          <div>
            <h1 className={styles.heading}>쉽게 쓰는 블로그, 종로그</h1>
            <h2 className={styles.sub_heading}>
              종로그는 무료로 제공되는 블로그 서비스입니다.
            </h2>
            <button className={styles.start_now_button}>지금 시작하기</button>
          </div>
          <div>
            <div className={styles.blog_window}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mainpage;
