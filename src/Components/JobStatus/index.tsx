"use client";

import React from 'react';
import { RiRadioButtonLine } from "react-icons/ri";

import { styles } from './constants';
import useJobStatus from './useJobStatus';
import { BiCoffeeTogo } from 'react-icons/bi';

const JobStatus = () => {
  const { status } = useJobStatus();

  return (
    <div className='flex justify-between my-5 flex-wrap gap-1'>
      <div className={styles.wrapper1}>
        <RiRadioButtonLine className={styles.online} />
        <span className='font-verdana'>{status}</span>
      </div>
      <div className={styles.wrapper2}>
        <BiCoffeeTogo className={styles.coffee} />
        <span className='font-verdana'>Buy Me a Coffee.</span>
      </div>
    </div>
  )
}

export default JobStatus;