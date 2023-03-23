import React, { useState, useEffect } from "react";
import styles from "../styles/app.module.scss";
import CommentSection from "../components/CommentSection/CommentSection";

const PostDetails = (props) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postId = props.postId;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [props.postId]);

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <article className={styles["PostDetails__Container"]} key={post.id}>
      <figure className={styles["CardDetails__Figure"]}>
        <img
          className={styles["CardDetails__Figure__Image"]}
          src={`https://picsum.photos/200/150?random=${post.id}`}
          alt="Random"
          crossOrigin="anonymous"
        />
        <figcaption>
          <h2 className={styles["PostDetails__Container__Card__Title"]}>
            {post.title}
          </h2>
          <p className={styles["PostDetails__Container__Card__Content"]}>
            {post.body}
          </p>
        </figcaption>
      </figure>
      <CommentSection postId={post.id} />
    </article>
  );
};

export default PostDetails;
