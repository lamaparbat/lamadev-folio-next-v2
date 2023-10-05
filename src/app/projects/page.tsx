'use client';
import Card from '@/Components/Card';
import { pageStyles } from '@/Constants';
import React, { useEffect } from 'react';
import { LuSearch } from 'react-icons/lu';

const ProjectFeed = () => {

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
      <div className={pageStyles.feed_child1}>
        <h6>Projects Feed</h6>
        <LuSearch className={pageStyles.feed_child1_searchIcon} />
      </div>
      <div className={pageStyles.feed_child2}>
        <Card
          title="Blockchain Election System"
          description="This site is an ecommerce clothing brand distributors"
          image="/images/evoting.png"
          link={{ siteLink: "" }}
          id={0}
        />
        <Card
          title="Clothing Ecommerce Site"
          description="This site is an ecommerce clothing brand distributors"
          image="/images/aroma.png"
          link={{ siteLink: "" }}
          id={1}
        />
        <Card
          title="Whatsapp Clone"
          description="This site is an ecommerce clothing brand distributors"
          image="/images/whatsapp.png"
          link={{ siteLink: "" }}
          id={2}
        />
        <Card
          title="Elibrary"
          description="This site is an ecommerce clothing brand distributors"
          image="/images/elibrary.png"
          link={{ siteLink: "" }}
          id={3}
        />
        <Card
          title="Course Management System"
          description="This site is an ecommerce clothing brand distributors"
          image="/images/cms.jpeg"
          link={{ siteLink: "" }}
          id={3}
        />
      </div>
    </div>
  )
}

export default ProjectFeed;
