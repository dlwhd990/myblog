import React from "react";
import styles from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={styles.body}>
      <main className={styles.login}>
        <div className={styles.left}>
          <div className={styles.deco}></div>
          <div className={styles.deco}></div>
          <div className={styles.deco}></div>
        </div>
        <form action="/login">
          <h1 className={styles.title}>로그인</h1>
          <input type="email" className={styles.login_input} />
          <input type="password" className={styles.login_input} />
          <button className={styles.submit_button}>로그인</button>
          <p className={styles.forgot_pw}>비밀번호를 잊어버리셨나요?</p>
          <p className={styles.go_signup}>종로그의 회원이 되어보세요</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
