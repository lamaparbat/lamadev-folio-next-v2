'use client';

import React from 'react';
import { styles } from './constants';
import { CardType } from './interface';
import Image from 'next/image';
import { LuGithub, LuArrowUpRight } from 'react-icons/lu';
import { CgLivePhoto } from 'react-icons/cg';
import useCard from './useCard';

const Card: React.FC<CardType> = ({ title, description, image, link, key }) => {

  const {
    showArrowIcon,
    handleMouseOverFooter,
    handleMouseLeaveFooter
  } = useCard();

  return (
    <div>
      <div className={styles.card}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.para}>{description}</p>
        <div className={styles.imgContainer}>
          <Image
            src="/images/test.png"
            alt=""
            height={200}
            width={300}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_child} onMouseOver={() => handleMouseOverFooter(`${key}-github`)} onMouseOut={handleMouseLeaveFooter}>
          <div className={styles.flex_between}>
            <div className={styles.badge}><LuGithub /></div>
            {showArrowIcon === `${key}-github` && <LuArrowUpRight />}
          </div>

          <h5 className={styles.title}>Github</h5>
          <p className={styles.sub_title}>Source code</p>
        </div>
        <div className={styles.footer_child} onMouseOver={() => handleMouseOverFooter(`${key}-live`)} onMouseOut={handleMouseLeaveFooter}>
          <div className={styles.flex_between}>
            <div className={styles.badge}><CgLivePhoto /></div>
            {showArrowIcon === `${key}-live` && <LuArrowUpRight />}
          </div>

          <h5 className={styles.title}>Live</h5>
          <p className={styles.sub_title}>Website link</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
