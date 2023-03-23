import React, { useState, useEffect } from "react";
import styles from "../../styles/app.module.scss";

const CommentSection = (props) => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const postId = props.postId;
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
      fetch(`https://jsonplaceholder.typicode.com/users`),
    ])
      .then(([commentsResponse, usersResponse]) =>
        Promise.all([commentsResponse.json(), usersResponse.json()])
      )
      .then(([commentsData, usersData]) => {
        setComments(commentsData);
        setUsers(usersData);
      })
      .catch((error) => console.log(error));
  }, [props.postId]);

  if (comments.length === 0 && users.length === 0) {
    return <div>Carregando comentários...</div>;
  }

  return (
    <div className={styles["CommentSection__Container"]}>
      <h3>Comentários</h3>
      <ul className={styles["CommentSection__List"]}>
        {comments.map((comment) => {
          const user = users.find((user) => user.id === comment.id);
          const username = user ? user.username : "Anônimo";

          return (
            <li key={comment.id} className={styles["CommentSection"]}>
              <figure className={styles["CommentSection__Identification"]}>
                <img
                  className={styles["CommentSection__Identification__Avatar"]}
                  src={`https://picsum.photos/40/40?random=${Math.floor(
                    Math.random() * 100
                  )}`}
                  alt="Avatar"
                  crossOrigin="anonymous"
                />
                <figcaption
                  className={styles["CommentSection__Identification__UserName"]}
                >
                  {username}
                </figcaption>
              </figure>
              <p className={styles["CommentSection__Email"]}>{comment.email}</p>
              <span className={styles["CommentSection__Title"]}>
                {comment.name}
              </span>
              <p className={styles["CommentSection__Commentary"]}>
                {comment.body}
              </p>
              <p className={styles["CommentSection__DateTime"]}>
                {new Date().toLocaleString()}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentSection;
