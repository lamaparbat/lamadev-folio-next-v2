"use client";

import React from 'react';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';

import { DEFAULT_TAB_ITEMS, MEDIA_TAB_ITEMS, styles } from './constants';
import { TAB_ITEMS } from './interface';
import useTabNavigation from './useTabNavigation';
import JobStatus from '../JobStatus';
import { BiMenu } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';


const TabNavigation = () => {
  const { openTabNavigation, activeTabIndex, redirectTo, handleOpenTabNavigation, handleTabChange, getCalculatedMargninY } = useTabNavigation();

  return (
    <>
      <div className={styles.badgeWrapper}>
        <div className={styles.badgeWrapperChild}>
          <JobStatus />
          <div className={styles.badge} onClick={handleOpenTabNavigation}>
            {
              openTabNavigation ? <MdOutlineClose className={styles.menuIconSIze} /> : <BiMenu className={styles.menuIconSIze} />
            }
          </div>
        </div>
      </div>

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
          <div className="w-[50vw] h-[100vh] fixed bg-slate-800 top-0 left-0 z-50 flex-center sm:hidden">
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
    </>

  )
}

export default TabNavigation;
