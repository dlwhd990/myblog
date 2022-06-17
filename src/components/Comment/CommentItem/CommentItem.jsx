import React from "react";
import styles from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <div className={styles.comment_item}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnFfYKgkxrB5-hTV8OQYuYEaqfYP0rGkz2g&usqp=CAU"
          alt="프로필 이미지"
          className={styles.profile_image}
        />
      </div>
      <div className={styles.data_box}>
        <p className={styles.name_and_time}>
          <span className={styles.name}>굼스</span>
          <span className={styles.divide_line}>|</span>
          <span className={styles.time}>5분 전</span>
        </p>
        <div className={styles.comment}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptas
          quasi, dolor aut quibusdam accusamus consectetur harum quod sint,
          optio labore eius sunt nulla consequuntur unde eveniet deserunt
          nesciunt ea!
        </div>
        <div className={styles.comment_button_box}>
          <button>답글</button>
          <button>
            <i className={`${styles.heart} fa-solid fa-heart`}></i> 24
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
