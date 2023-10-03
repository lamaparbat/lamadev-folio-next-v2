"use client";

import { LuSearch } from 'react-icons/lu';
import { HiAcademicCap } from 'react-icons/hi';
import { MdWorkspacePremium } from 'react-icons/md';
import { LiaSchoolSolid } from 'react-icons/lia';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GiSandsOfTime } from 'react-icons/gi';

import Card from '@/Components/Card';
import { pageStyles } from '@/Constants';
import AcademicCard from "@/Components/AcademicCard/page";
import ExperienceCard from "@/Components/ExperienceCard/page";
import SkillsCard from "@/Components/SkillsCard/page";
import { Skills } from "@/Components/SkillsCard/constant";
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const observers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animateOff');
          entry.target.classList.add('animateOn');

          if(entry.target.className.includes('academic_card')) {
            const dom:any = document.querySelector(".verticalLineWrapper .verticalLine");
            const start1:any = document.getElementById("start1");
            const stop1:any = document.getElementById("stop1");

            start1.style.display = 'flex';
            stop1.style.display = 'none';
            let height = 10;

            const interval = setInterval(() => {
              height += 10;
              if(dom) dom.style.height = `${height}px`;
              
              if(height > 215) {
                start1.style.display = 'none';
                stop1.style.display = 'flex';
                clearInterval(interval);
              }
            }, 100);
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
    <div className={pageStyles.wrapper}>
      <img
        src="/images/parbat.png"
        className='mt-10 w-full sm:w-[80%] rounded-b-full animateOff'
        alt='profile'
      />
      <div className={pageStyles.title}>
        <h1 className='text-[2.5rem] max-[460px]:text-[2rem] sm:text-[2.8rem] font-bold'>Hey, I’m Parbat</h1>
        <div className='flex mb-2'>
          <h1 className='text-[2.5rem] max-[460px]:text-[2rem] sm:text-[2.8rem] font-bold'>a</h1>
          <h1 className='ml-4 text-[2.5rem] max-[460px]:text-[2rem] sm:text-[2.8rem] text-muted font-bold'>Fullstack Developer.</h1>
        </div>
        <p> Namaste! I'm Parbat Lama, a Fullstack Web Developer hailing from the vibrant landscapes of Nepal. With a blend of Himalayan inspiration and a passion for coding, I craft digital wonders that bridge cultures and connect people worldwide. Explore my portfolio to witness how technology meets the spirit of Nepal in every line of code.</p>
      </div>

      <div className={pageStyles.divider}></div>

      <>
        <div className={pageStyles.feed_child1}>
          <h6>Academic Qualification</h6>
          <HiAcademicCap className={pageStyles.feed_child1_searchIcon} />
        </div>
        <div className={`${pageStyles.feed_child2} flex flex-wrap`}>
          <div className='verticalLineWrapper invisible sm:visible'>
            <div className='verticalLine'></div>
            <GiSandsOfTime id='start1' className='bg-green-700 text-white p-1 text-3xl animate-spin text-green-700 rounded-ful rotate-180 rounded-full' />
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
            collegeName="Herald College Kathmandu (HCK)"
            courseName="BSc (Hons) Computer Science (BIT)"
            courseDuration="2005 - 2018"
            key={3}
          />
        </div>
      </>

      <div className={pageStyles.divider}></div>

      <>
        <div className={pageStyles.feed_child1}>
          <h6>Work Experience</h6>
          <MdWorkspacePremium className={pageStyles.feed_child1_searchIcon} />
        </div>
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
            jobType="Part-time"
            workingHours="Part"
          />
        </div>
      </>

      <div className={pageStyles.divider}></div>

      <div className='animateOff'>
        <div className={pageStyles.feed_child1}>
          <h6>Skills And Knowledge</h6>
          <MdWorkspacePremium className={pageStyles.feed_child1_searchIcon} />
        </div>
        <div className={`${pageStyles.feed_child2} flex flex-wrap`}>
          <SkillsCard title="UI/UX" items={Skills.uiux} />
          <SkillsCard title="Frontend" items={Skills.frontend} />
          <SkillsCard title="Backend" items={Skills.backend} />
          <SkillsCard title="Database" items={Skills.database} />
        </div>
      </div>

      <div className={pageStyles.divider}></div>

      <>
        <div className={pageStyles.feed_child1}>
          <h6>My Feed</h6>
          <LuSearch className={pageStyles.feed_child1_searchIcon} />
        </div>
        <div className={pageStyles.feed_child2}>
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
      </>

    </div>
  )
}
