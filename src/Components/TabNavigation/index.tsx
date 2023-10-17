"use client";

import React from 'react';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';

import { DEFAULT_TAB_ITEMS, MEDIA_TAB_ITEMS, styles } from './constants';
import { TAB_ITEMS } from './interface';
import useTabNavigation from './useTabNavigation';

import { BiMenu } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { FiMoon, FiSun } from 'react-icons/fi';


const TabNavigation = () => {
  const { theme, openTabNavigation, activeTabIndex, themeTooltipContent, redirectTo, getCalculatedMargninY, handleChangeTheme, handleOpenTabNavigation, handleTabChange } = useTabNavigation();
  const lastIndex = DEFAULT_TAB_ITEMS?.length;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.vertical_navbar}>
          {
            DEFAULT_TAB_ITEMS.map((d: TAB_ITEMS, i: number) => {
              const calculatedMargninY = getCalculatedMargninY(i, DEFAULT_TAB_ITEMS.length);

              return (
                <Link href={d?.path} key={i} onClick={() => handleTabChange(i)} data-tooltip-id="link" data-tooltip-content={d.title}>
                  <div className={`${styles.nav_button} ${calculatedMargninY} ${activeTabIndex === i && 'active'}`}>{d.icon}</div>
                </Link>
              )
            })
          }
          <div
            className={`${styles.nav_button} ${activeTabIndex === lastIndex && 'active'} mt-2`}
            onClick={handleChangeTheme}
            data-tooltip-id="link"
            data-tooltip-content={themeTooltipContent}
          >
            {theme === 'light' ? <FiSun /> : <FiMoon />}
          </div>
        </div>
        <div className={styles.vertical_navbar}>
          {MEDIA_TAB_ITEMS.map((d: TAB_ITEMS, i: number) => {
            const calculatedMargninY = getCalculatedMargninY(i, DEFAULT_TAB_ITEMS.length);

            return (
              <div
                className={`${styles.nav_button} ${calculatedMargninY}`}
                onClick={() => redirectTo(d.path)}
                key={i}
                data-tooltip-id="link"
                data-tooltip-content={d.title}
              >
                {d.icon}
              </div>
            )
          })}
        </div>
        <Tooltip className={styles.tooltip} id="link" place='right' />
      </div>


      {
        openTabNavigation && (
          <div className={styles.navbar2}>
            <div className={styles.vertical_navbar}>
              {
                DEFAULT_TAB_ITEMS.map((d: TAB_ITEMS, i: number) => {
                  const calculatedMargninY = getCalculatedMargninY(i, DEFAULT_TAB_ITEMS.length);

                  return (
                    <Link href={d?.path} key={i} onClick={() => handleTabChange(i)} data-tooltip-id="link" data-tooltip-content={d.title}>
                      <div className={`${styles.nav_button} ${calculatedMargninY} ${activeTabIndex === i && 'active'}`}>{d.icon}</div>
                    </Link>
                  )
                })
              }
              <div
                className={`${styles.nav_button} ${activeTabIndex === lastIndex && 'active'} mt-2`}
                onClick={handleChangeTheme}
                data-tooltip-id="link"
                data-tooltip-content={themeTooltipContent}
              >
                {theme === 'light' ? <FiSun /> : <FiMoon />}
              </div>
            </div>
            <div className={styles.vertical_navbar}>
              {MEDIA_TAB_ITEMS.map((d: TAB_ITEMS, i: number) => {
                const calculatedMargninY = getCalculatedMargninY(i, DEFAULT_TAB_ITEMS.length);

                return (
                  <div
                    className={`${styles.nav_button} ${calculatedMargninY}`}
                    onClick={() => redirectTo(d.path)}
                    key={i}
                    data-tooltip-id="link"
                    data-tooltip-content={d.title}
                  >
                    {d.icon}
                  </div>
                )
              })}
            </div>
            <Tooltip className={styles.tooltip} id="link" place='right' />
          </div>
        )
      }
      <div className={styles.badge} onClick={handleOpenTabNavigation}>
        {
          openTabNavigation ? <MdOutlineClose className={styles.menuIconSIze} /> : <BiMenu className={styles.menuIconSIze} />
        }
      </div>
    </>

  )
}

export default TabNavigation;
