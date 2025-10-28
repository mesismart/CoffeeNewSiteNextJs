import React from "react";
import styles from "./article.module.css";

function Article({ imageSrc, title, date, comments }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.text_container}>
        <p>{title}</p>
        <div className={styles.details}>
          <span> {date}</span>
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
}

export default Article;
