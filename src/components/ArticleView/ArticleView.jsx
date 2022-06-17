import React from "react";
import CommentInput from "../Comment/CommentInput/CommentInput";
import CommentItem from "../Comment/CommentItem/CommentItem";
import styles from "./ArticleView.module.css";

const ArticleView = (props) => {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <section className={styles.article_data_box}>
          <p className={styles.date_and_subject}>
            <span className={styles.date}>2022/06/14</span>
            <span className={styles.subject}>공부</span>
          </p>
          <h1 className={styles.title}>
            자바스크립트의 동작원리에 대해서 - 1부
          </h1>
          <div className={styles.writer_and_data_box}>
            <div className={styles.writer_box}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnFfYKgkxrB5-hTV8OQYuYEaqfYP0rGkz2g&usqp=CAU"
                alt="프로필사진"
                className={styles.writer_image}
              />
              <div className={styles.writer_data}>
                {/* writer_text에는 추후 생각하여 다른 내용을 넣을 것 */}
                <p className={styles.writer_text}>글쓴이</p>
                <p className={styles.writer_name}>이종혁</p>
              </div>
            </div>
            <div className={styles.data_box}>
              <div>
                <p className={styles.data_title}>읽는 데</p>
                <p className={styles.data_text}>10분 소요</p>
              </div>
              <div>
                <p className={styles.data_title}>조회수</p>
                <p className={styles.data_text}>3.7K People</p>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.divide_line}></div>
        <article className={styles.article}>
          오늘은 자바스크립트의 동작원리에 대해서 공부해보았다. 우선 이에 대해
          가장 먼저 알아야 할 점은 자바스크립트의 탄생 배경부터 알아야 할 필요가
          있었다. 오늘은 자바스크립트의 동작원리에 대해서 공부해보았다. 우선
          이에 대해 가장 먼저 알아야 할 점은 자바스크립트의 탄생 배경부터 알아야
          할 필요가 있었다.
        </article>
        <div className={styles.comment_box}>
          <p className={styles.comment_text}>댓글 4</p>
          <CommentInput />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>
      </main>
    </div>
  );
};

export default ArticleView;
