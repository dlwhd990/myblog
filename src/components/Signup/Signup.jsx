import React from "react";
import styles from "./Signup.module.css";

const Signup = (props) => {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.left}>
          <img
            src="https://suposaka.net/wp-content/uploads/2022/01/013-4.jpg"
            alt="이미지"
            className={styles.main_image}
          />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>회원가입</h1>
          <h2 className={styles.subtitle}>Sign up</h2>
          <form action="/api/" className={styles.signup_form}>
            <p>
              <label for="email">이메일</label>
              <div className={styles.email_box}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.email}
                  placeholder="이메일"
                />
                <button type="button" className={styles.auth_button}>
                  인증번호전송
                </button>
              </div>
            </p>
            <p>
              <label for="auth">인증번호</label>
              <input
                type="text"
                id="auth"
                name="auth"
                placeholder="인증번호 6자리"
              />
            </p>
            <p>
              <label for="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호 (6 ~ 12자, 특수문자 포함)"
              />
            </p>
            <p>
              <label for="nickname">닉네임</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="닉네임 (2 ~ 6자)"
              />
            </p>
            <button className={styles.submit_button}>가입</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
