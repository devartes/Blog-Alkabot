import styles from "../../styles/app.module.scss"

const Footer = () => {
  return (
    <footer className={styles["Footer"]}>
      <ul className={styles["Footer__Initial"]}>
        <ul className={styles["Footer__Initial__Phrase"]}>ut aspernatur corporis harum nihil quis</ul>
        <ul className={styles["Footer__Initial__Links"]}>
          <li><a href="/">link</a></li>
          <li><a href="/">link</a></li>
          <li><a href="/">link</a></li>
          <li><a href="/">link</a></li>
          <li><a href="/">link</a></li>
        </ul>
      </ul>
      <ul className={styles["Footer__Final"]}>dolore placeat quibusdam ea - copyright 2023</ul>
    </footer>
  );
};

export { Footer };
