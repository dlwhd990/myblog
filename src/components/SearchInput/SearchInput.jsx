import React from "react";
import styles from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <div className={styles.search_box}>
      <i className={`${styles.search_icon} fa-solid fa-magnifying-glass`}></i>
      <input
        type="text"
        className={styles.search_input}
        placeholder="원하는 키워드로 검색해보세요"
      />
    </div>
  );
};

export default SearchInput;
