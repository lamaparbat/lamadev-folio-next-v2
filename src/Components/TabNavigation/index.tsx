"use client";

import React from 'react';
import Link from 'next/link';

import { DEFAULT_TAB_ITEMS, MEDIA_TAB_ITEMS, styles } from './constants';
import { TAB_ITEMS } from './interface';
import useTabNavigation from './useTabNavigation';


const TabNavigation = () => {
  const { activeTabIndex, redirectTo } = useTabNavigation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.vertical_navbar}>
        {
          DEFAULT_TAB_ITEMS.map((d: TAB_ITEMS, i: number) => (
            <Link href={d?.path} key={i}>
              <div className={`${styles.nav_button} ${activeTabIndex === i && 'active'}`}>{d.icon}</div>
            </Link>
          ))
        }
      </div>
      <div className={styles.vertical_navbar}>
        {MEDIA_TAB_ITEMS.map((d: TAB_ITEMS, i: number) => <div className={styles.nav_button} onClick={() => redirectTo(d.path)} key={i}>{d.icon}</div>)}
      </div>
    </div>
  )
}

export default TabNavigation;
