import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import ArticlePreviewLong from "../ArticlePreviews/ArticlePreviewLong/ArticlePreviewLong";
import ArticlePreviewShort from "../ArticlePreviews/ArticlePreviewShort/ArticlePreviewShort";
import styles from "./ArticleList.module.css";

const ArticleList = (props) => {
  return (
    <div className={styles.temp_bg}>
      <main className={styles.article_list}>
        <section className={styles.latest_box}>
          <h1>최신글</h1>
          <SearchInput />
          <div className={styles.long_box}>
            <ArticlePreviewLong />
          </div>
          <div className={styles.short_box}>
            <ArticlePreviewShort />
            <ArticlePreviewShort />
          </div>
        </section>
        <aside className={styles.hot_box}>
          <h1>인기글</h1>
        </aside>
      </main>
    </div>
  );
};

export default ArticleList;
