"use client";

import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { TypeAnimation } from 'react-type-animation';

import { HiAcademicCap } from 'react-icons/hi';
import { GiSandsOfTime } from 'react-icons/gi';
import { LiaSchoolSolid } from 'react-icons/lia';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdWorkspacePremium } from 'react-icons/md';

import ProjectFeed from './blogs/page';
import { pageStyles } from '@/Constants';
import JobStatus from '@/Components/JobStatus';
import Subheader from '@/Components/Subheader/page';
import SkillsCard from "@/Components/SkillsCard/page";
import TabNavigation from '@/Components/TabNavigation';
import { Skills } from "@/Components/SkillsCard/constant";
import AcademicCard from "@/Components/AcademicCard/page";
import ExperienceCard from "@/Components/ExperienceCard/page";


export default function Home() {
  useEffect(() => {
    const observers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animateOff');
          entry.target.classList.add('animateOn');

          if (entry.target.className.includes('academic_card')) {
            const dom: any = document.querySelector(".verticalLineWrapper .verticalLine");
            const start1: any = document.getElementById("start1");
            const stop1: any = document.getElementById("stop1");

            start1.style.display = 'flex';
            stop1.style.display = 'none';
            let height = 10;

            const interval = setInterval(() => {
              height += 10;
              if (dom) dom.style.height = `${height}px`;

              if (height > 215) {
                start1.style.display = 'none';
                stop1.style.display = 'flex';
                clearInterval(interval);
              }
            }, 50);
          }
        } else {
          entry.target.classList.add('animateOff');
          entry.target.classList.remove('animateOn');
        }
      });
    })

    const blocks = document.querySelectorAll('.animateOff');

    blocks.forEach((ele) => observers.observe(ele));
  }, []);

  return (
    <>
      <TabNavigation />
      <div className={pageStyles.wrapper}>
        <img
          src="/images/parbat.png"
          className='w-full sm:w-[65%] rounded-b-full animateOff'
          alt='profile'
        />
        <div className={pageStyles.title}>
          <JobStatus />
          <label className='text-[2.5rem] max-[460px]:text-[2rem] sm:text-[2.8rem] font-bold'>Hey, I’m Parbat.</label>
          <div>
            <TypeAnimation
              sequence={[
                'A UI/UX Designer.', 1000, () => { },
                'A Frontend Developer.', 1000, () => { },
                'A Backend Developer.', 1000, () => { },
                'A System Design Enthusiast.', 1000, () => { },
                ''
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className='mb-5 text-2xl font-medium text-green-700 dark:text-green-500'
              style={{ display: 'inline-block' }}
            />
          </div>
          <div>
            <TypeAnimation
              sequence={[
                "Namaste! I'm Parbat Lama, a Fullstack Web Developer hailing from the vibrant landscapes of Nepal. With a blend of Himalayan inspiration and a passion for coding, I craft digital wonders that bridge cultures and connect people worldwide. Explore my portfolio to witness how technology meets the spirit of Nepal in every line of code.",
                1000, () => { },
              ]}
              wrapper="p"
              cursor={true}
              repeat={0}
              style={{ display: 'inline-block' }}
            />
          </div>
        </div>

        <div className={pageStyles.divider}></div>

        <>
          <Subheader title='Academic Qualification' icon={<HiAcademicCap />} />
          <div className={`${pageStyles.feed_child2} flex flex-wrap`}>
            <div className='verticalLineWrapper invisible sm:visible'>
              <div className='verticalLine'></div>
              <GiSandsOfTime id='start1' className='bg-green-700 text-white dark:text-black p-1 text-3xl animate-spin rounded-ful rotate-180 rounded-full' />
              <AiFillCheckCircle id='stop1' className='hidden text-3xl text-green-700 rounded-ful stop1' />
            </div>
            <AcademicCard
              logo="/images/herald.png"
              collegeName="Herald College Kathmandu (HCK)"
              courseName="BSc (Hons) Computer Science (BIT)"
              courseDuration="2021 - 2023"
              key={1}
            />
            <AcademicCard
              logo="/images/uniglobe.png"
              collegeName="Uniglobe SS/College"
              courseName="Higher Secondary School (+2) "
              courseDuration="2019 - 2020"
              key={2}
            />
            <AcademicCard
              logo={<LiaSchoolSolid className='text-5xl text-green-900' />}
              collegeName="Kalpavriksha Secondary School"
              courseName="Secondary School"
              courseDuration="2005 - 2018"
              key={3}
            />
          </div>
        </>

        <div className={pageStyles.divider}></div>
        <>
          <Subheader title='Work Experience' icon={<MdWorkspacePremium />} />
          <div className={`${pageStyles.feed_child2} flex-between flex-wrap`}>
            <ExperienceCard
              logo="/images/portpro.jpg"
              companyName="Portpro"
              position="Fullstack Web Developer"
              engagedDuration="July 2022 - Present"
              skills={['React', 'Redux', 'Node', 'Express', 'Hapi.js', 'MongoDB', 'Sequelize',]}
              jobType="On-site"
              workingHours="Full-time"
            />
            <ExperienceCard
              logo="/images/devplat.jpeg"
              companyName="Development Platform HCK"
              position="Team Lead"
              engagedDuration="Jan 2021 - Jan 2023"
              skills={['React', 'Redux', 'Node', 'Express', 'Swagger', 'Rest API', 'MongoDB']}
              jobType="Hybrid"
              workingHours="Part-time"
            />
            <ExperienceCard
              logo="/images/princelab.jpeg"
              companyName="Princelab Pvt. Ltd."
              position="Web Developer"
              engagedDuration="Jan 2022 - Dec 2022"
              skills={['React', 'Next.js', 'Redux', 'TensorFlowApis']}
              jobType="Remote"
              workingHours="Part-time"
            />
          </div>
        </>

        <div className={pageStyles.divider}></div>

        <div className='animateOff'>
          <Subheader title='Skills And Knowledge' icon={<MdWorkspacePremium />} />
          <div className={`${pageStyles.feed_child2} flex flex-wrap`}>
            <SkillsCard title="UI/UX" items={Skills.uiux} />
            <SkillsCard title="Frontend" items={Skills.frontend} />
            <SkillsCard title="Backend" items={Skills.backend} />
            <SkillsCard title="Database" items={Skills.database} />
          </div>
        </div>

        <div className={pageStyles.divider}></div>

        <ProjectFeed />

      </div>
    </>

  )
}
