import React from 'react';
import { styles } from './constants';
import { CardType } from './interface';

const Card: React.FC<CardType> = ({ title, description, image, link }) => {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.para}>{description}</p>
    </div>
  )
}

export default Card
