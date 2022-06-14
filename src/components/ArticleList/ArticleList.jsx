import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import ArticlePreviewLong from "../ArticlePreviews/ArticlePreviewLong/ArticlePreviewLong";
import ArticlePreviewShort from "../ArticlePreviews/ArticlePreviewShort/ArticlePreviewShort";
import styles from "./ArticleList.module.css";
import ArticlePreviewHot from "../ArticlePreviews/ArticlePreviewHot/ArticlePreviewHot";

const ArticleList = (props) => {
  return (
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
        <div className={styles.short_box}>
          <ArticlePreviewShort />
          <ArticlePreviewShort />
        </div>
        <div className={styles.short_box}>
          <ArticlePreviewShort />
          <ArticlePreviewShort />
        </div>
      </section>
      <aside className={styles.hot_box}>
        <h1>인기글</h1>
        <div className={styles.hot_list_box}>
          <ArticlePreviewHot />
          <ArticlePreviewHot />
          <ArticlePreviewHot />
          <ArticlePreviewHot />
        </div>
      </aside>
    </main>
  );
};

export default ArticleList;
