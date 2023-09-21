"use client";

import Card from '@/Components/Card';
import JobStatus from '@/Components/JobStatus';
import { slideUp, zoomIn } from '@/Constants';
import { LuSearch } from 'react-icons/lu';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <JobStatus />
      <div className='intro mt-10 mb-8'>
        <motion.h1 className='text-5xl font-bold' variants={slideUp} initial="start" animate="slideUp" exit="end">Hey, I’m Parbat</motion.h1>
        <motion.div className='flex mt-4 mb-8' variants={slideUp} initial="start" animate="slideUp" exit="end">
          <h1 className='text-5xl font-bold'>a</h1>
          <h1 className='ml-4 text-5xl text-muted font-bold'>Fullstack Developer.</h1>
        </motion.div>
        <motion.p variants={zoomIn} initial="start" animate="zoomIn" exit="end"> Namaste! I'm Parbat Lama, a Fullstack Web Developer hailing from the vibrant landscapes of Nepal. With a blend of Himalayan inspiration and a passion for coding, I craft digital wonders that bridge cultures and connect people worldwide. Explore my portfolio to witness how technology meets the spirit of Nepal in every line of code.</motion.p>
      </div>

      <div className="divider"></div>

      <div className='feed'>
        <div className='flex justify-between items-center'>
          <h6>My Feed</h6>
          <LuSearch className="text-lg cursor-pointer" />
        </div>
        <div className='my-5 flex flex-wrap justify-between'>
          <Card
            title="Clothing Brand Site"
            description="This site is an ecommerce clothing brand distributors"
            image=""
            link={{ siteLink: "" }}
            id={0}
          />
          <Card
            title="Clothing Brand Site"
            description="This site is an ecommerce clothing brand distributors"
            image=""
            link={{ siteLink: "" }}
            id={1}
          />
          <Card
            title="Clothing Brand Site"
            description="This site is an ecommerce clothing brand distributors"
            image=""
            link={{ siteLink: "" }}
            id={2}
          />
          <Card
            title="Clothing Brand Site"
            description="This site is an ecommerce clothing brand distributors"
            image=""
            link={{ siteLink: "" }}
            id={3}
          />
        </div>
      </div>

    </ >
  )
}
