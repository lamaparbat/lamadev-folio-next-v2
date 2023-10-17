'use client';

import React from 'react';
import Image from 'next/image';
import { LuGithub, LuArrowUpRight } from 'react-icons/lu';
import { CgLivePhoto } from 'react-icons/cg';

import useCard from './useCard';
import { styles } from './constants';
import { CardType } from './interface';

const Card: React.FC<CardType> = ({ title, description, image, link, id }) => {

  const {
    showArrowIcon,
    handleMouseOverFooter,
    handleMouseLeaveFooter
  } = useCard();

  return (
    <div>
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.para}>{description}</p>
        <div className={styles.imgContainer}>
          <Image
            src={image}
            alt=""
            height={200}
            width={300}
            className='hue-rotate-90'
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_child} onMouseOver={() => handleMouseOverFooter(`${id}-github`)} onMouseOut={handleMouseLeaveFooter}>
          <div className={styles.flex_between}>
            <div className={styles.badge}><LuGithub /></div>
            {showArrowIcon === `${id}-github` && <LuArrowUpRight />}
          </div>

          <h5 className={styles.title}>Github</h5>
          <p className={styles.sub_title}>Source code</p>
        </div>
        <div className={styles.footer_child} onMouseOver={() => handleMouseOverFooter(`${id}-live`)} onMouseOut={handleMouseLeaveFooter}>
          <div className={styles.flex_between}>
            <div className={styles.badge}><CgLivePhoto /></div>
            {showArrowIcon === `${id}-live` && <LuArrowUpRight />}
          </div>
          <h5 className={styles.title}>Live</h5>
          <p className={styles.sub_title}>Website link</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
