import React from "react";
import styles from "../../styles/app.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <p className={styles["Header__WelcomeMessage"]}>Bem-vindo(a) ao</p>
      <h1 className={styles["Header__Title"]}>Blog Alkabot</h1>
      <p className={styles["Header__Title-Details"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
    </header>
  );
};

export { Header };
