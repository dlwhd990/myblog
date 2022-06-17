import React from "react";
import styles from "./CommentInput.module.css";

const CommentInput = (props) => {
  return (
    <div className={styles.comment_input_box}>
      <textarea placeholder="댓글을 입력하세요 (운영 규칙에 맞지 않는 댓글은 삭제될 수 있습니다.)"></textarea>
      <button>등록</button>
    </div>
  );
};

export default CommentInput;
