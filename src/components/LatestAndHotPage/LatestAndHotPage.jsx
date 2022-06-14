import React from "react";
import styles from "./LatestAndHotPage.module.css";
import ArticleList from "../ArticleList/ArticleList";

const LatestAndHotPage = (props) => {
  return (
    <div className={styles.body}>
      <ArticleList />
    </div>
  );
};

export default LatestAndHotPage;
