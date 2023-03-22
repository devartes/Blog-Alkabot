import { Post } from "./Post/Post";
import styles from "../../styles/app.module.scss";

const Main = () => {
  return (
    <main className={styles.Main}>
      <section>
        <Post />
      </section>
    </main>
  );
};

export { Main };