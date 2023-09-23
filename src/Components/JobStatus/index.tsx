"use client";

import React from 'react';
import { RiRadioButtonLine } from "react-icons/ri";

import { styles } from './constants';
import useJobStatus from './useJobStatus';

const JobStatus = () => {
  const { status } = useJobStatus();

  return (
    <div className={styles.wrapper}>
      <RiRadioButtonLine className={styles.online} />
      <span className='font-verdana'>{status}</span>
    </div>
  )
}

export default JobStatus;