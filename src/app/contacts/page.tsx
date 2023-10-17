'use client';

import TabNavigation from '@/Components/TabNavigation';
import React from 'react';
import { LuFacebook, LuGithub, LuLinkedin, LuMail, LuPhoneCall, LuYoutube } from 'react-icons/lu';

const ProjectFeed = () => {
  return (
    <>
      <TabNavigation />
      <div className='wrapper'>
        <h1>Contact Me</h1>
        <p className='my-5'>I look forward to hearing from you. Feel free to use the details below.</p>
        <div className='border border-slate-100 dark:border-zinc-800 px-5 py-3 mb-2 rounded-md flex justify-between flex-wrap gap-1'>
          <div className='h-[50px] w-[75px] flex-center px-5 py-2 rounded shadow-inner hover:shadow-md hover: cursor-pointer hover: ease-in-out duration-1000 dark:bg-zinc-700'>
            <LuFacebook className='text-2xl' />
          </div>
          <div className='h-[50px] w-[75px] flex-center px-5 py-2 rounded shadow-inner hover:shadow-md hover: cursor-pointer hover: ease-in-out duration-1000 dark:bg-zinc-700'>
            <LuYoutube className='text-2xl' />
          </div>
          <div className='h-[50px] w-[75px] flex-center px-5 py-2 rounded shadow-inner hover:shadow-md hover: cursor-pointer hover: ease-in-out duration-1000 dark:bg-zinc-700'>
            <LuLinkedin className='text-2xl' />
          </div>
          <div className='h-[50px] w-[75px] flex-center px-5 py-2 rounded shadow-inner hover:shadow-md hover: cursor-pointer hover: ease-in-out duration-1000 dark:bg-zinc-700'>
            <LuPhoneCall className='text-2xl' />
          </div>
          <div className='h-[50px] w-[75px] flex-center px-5 py-2 rounded shadow-inner hover:shadow-md hover: cursor-pointer hover: ease-in-out duration-1000 dark:bg-zinc-700'>
            <LuGithub className='text-2xl' />
          </div>
          <div className='h-[50px] w-[75px] flex-center px-5 py-2 rounded shadow-inner hover:shadow-md hover: cursor-pointer hover: ease-in-out duration-1000 dark:bg-zinc-700'>
            <LuMail className='text-2xl' />
          </div>
        </div>
        <div className='border border-slate-100 dark:border-zinc-800 px-5 pt-5 pb-10 rounded-md'>
          <div className='flex justify-between mb-5'>
            <div className='w-[49%]'>
              <label className='font-sm'>Fullname</label>
              <input className='w-full mt-1 py-[7px] px-3 outline-none border border-slate-60 dark:border-zinc-500 dark:bg-zinc-800 rounded' placeholder='Joe Biden' />
            </div>
            <div className='w-[49%]'>
              <label className='font-sm '>Email</label>
              <input className='w-full mt-1 py-[7px] px-3 outline-none border border-slate-60 dark:border-zinc-500 dark:bg-zinc-800 rounded' placeholder='joe@gmail.com' />
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <label className='font-sm '>Message</label>
            <textarea
              className='mt-1 py-[7px] px-3 outline-none border border-slate-60 dark:border-zinc-500 dark:bg-zinc-800 rounded'
              placeholder='Write your opinions...'
              rows={5}
            />
          </div>
          <button className='p-2 bg-black text-white dark:bg-zinc-800 mt-5 w-full rounded'>Send Message</button>
        </div>
      </div>
    </>
  )
}

export default ProjectFeed;
