import React, { useState, useEffect } from "react";
import styles from "../../../styles/app.module.scss";
import PostDetails from "../../../page/PostDetails";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      const postId = window.location.pathname.split("/")[2];
      setPostId(postId || null);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (postId) {
      window.history.pushState(null, "", `/posts/${postId}`);
    } else {
      window.history.pushState(null, "", "/");
    }
  }, [postId]);

  const handlePostClick = (event, postId) => {
    event.preventDefault();
    setPostId(postId);
  };

  if (postId) {
    const post = posts.find((post) => post.id === postId);
    return <PostDetails postId={postId} post={post} />;
  }

  return (
    <article className={styles["Post__Container"]}>
      {posts.map((post) => (
        <article className={styles["Post__Container__Card"]} key={post.id}>
          <figure className={styles["Card__Figure"]}>
            <img
              className={styles["Card__Figure__Image"]}
              src={`https://picsum.photos/200/150?random=${post.id}`}
              alt="Random"
              crossOrigin="anonymous"
            />
            <figcaption>
              <h2 className={styles["Post__Container__Card__Title"]}>
                {post.title}
              </h2>
              <p className={styles["Post__Container__Card__Content"]}>
                {post.body}
              </p>
            </figcaption>
          </figure>
          <a
            className={styles["Post__Container__Card__Link"]}
            href={`/posts/${post.id}`}
            onClick={(event) => handlePostClick(event, post.id)}
            key={post.id}
          >
            Ler Mais
          </a>
        </article>
      ))}
    </article>
  );
};

export { Post };
