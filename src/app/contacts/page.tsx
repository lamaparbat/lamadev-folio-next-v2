'use client';

import { MdOutlineEmail, MdPhone } from 'react-icons/md';
import { contactStyles } from './constant';
import React from 'react';
import { LuFacebook, LuYoutube } from 'react-icons/lu';

const ProjectFeed = () => {


  return (
    <div className='wrapper'>
      <h1>Contact Me</h1>
      <p>I look forward to hearing from you. Feel free to use the details below.</p>
      <div className='bg-white px-5 py-3 mb-2 rounded-md'>
        <div className='h-[50px] w-[70px] flex-center px-5 py-2 border border-slate-60 rounded'>
          <LuFacebook className='icon' />
        </div>
      </div>
      <div className='bg-white px-5 pt-5 pb-10 rounded-md'>
        <div className='flex justify-between mb-5'>
          <div className='w-[49%]'>
            <label className='font-sm text-slate-700'>Fullname</label>
            <input className='w-full mt-1 py-[7px] px-3 outline-none border border-slate-60 rounded' placeholder='Joe Biden' />
          </div>
          <div className='w-[49%]'>
            <label className='font-sm text-slate-700'>Email</label>
            <input className='w-full mt-1 py-[7px] px-3 outline-none border border-slate-60 rounded' placeholder='joe@gmail.com' />
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <label className='font-sm text-slate-700'>Message</label>
          <textarea 
            className='mt-1 py-[7px] px-3 outline-none border border-slate-60 rounded'
            placeholder='Write your opinions...' 
            rows={5}
          />
        </div>
        <button className='btn btn-dark mt-2 w-full rounded-1'>Send Message</button>
      </div>
    </div>
  )
}

export default ProjectFeed;
