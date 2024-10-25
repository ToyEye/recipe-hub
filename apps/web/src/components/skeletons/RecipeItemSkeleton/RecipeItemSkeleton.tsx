import React from 'react';

import styles from './RecipeItemSkeleton.module.scss';

const RecipeItemSkeleton = () => {
  return (
    <li className={styles.skeletonItem}>
      <div className={styles.animatePulse}>
        <div className={styles.placeholder}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Loading...</h2>
          <div className={styles.info}>
            <span className={styles.infoText}>Loading...</span>
          </div>
          <p className={styles.description}>Loading...</p>
          <p className={styles.link} onClick={(e) => e.preventDefault()}>
            View Recipe
          </p>
        </div>
      </div>
    </li>
  );
};

export default RecipeItemSkeleton;
