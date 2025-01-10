import React from 'react';
import styles from '../styles/ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.card}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <small>{article.category}</small>
    </div>
  );
};

export default ArticleCard;
