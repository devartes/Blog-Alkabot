import React, { useState, useEffect } from "react";
import styles from "../../styles/app.module.scss";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loading} ${loading ? styles.active : ""}`}>
      <div className={styles.loading__bar}></div>
    </div>
  );
};

export default Loading;
