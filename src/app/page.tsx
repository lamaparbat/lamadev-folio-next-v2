import JobStatus from '@/Components/JobStatus';
import { LuSearch } from 'react-icons/lu';

export default function Home() {
  return (
    <div className="">
      <JobStatus />
      <div className='intro mt-10 mb-8'>
        <h1 className='text-5xl font-bold'>Hey, I’m Parbat</h1>
        <div className='flex mt-4 mb-8'>
          <h1 className='text-5xl font-bold'>a</h1>
          <h1 className='ml-4 text-5xl text-muted font-bold'>Fullstack Developer.</h1>
        </div>
        <p> Namaste! I'm Parbat Lama, a Fullstack Web Developer hailing from the vibrant landscapes of Nepal. With a blend of Himalayan inspiration and a passion for coding, I craft digital wonders that bridge cultures and connect people worldwide. Explore my portfolio to witness how technology meets the spirit of Nepal in every line of code.</p>
      </div>

      <div className="divider"></div>

      <div className='feed'>
        <div className='flex justify-between items-center'>
          <h6>My Feed</h6>
          <LuSearch className="text-lg cursor-pointer" />
        </div>
      </div>

    </div>
  )
}
