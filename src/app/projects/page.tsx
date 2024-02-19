'use client';

import React, { useEffect } from 'react';
import { LuSearch } from 'react-icons/lu';

import Card from '@/Components/Card';
import { pageStyles, products } from '@/Constants';
import Subheader from '@/Components/Subheader/page';
import TabNavigation from '@/Components/TabNavigation';

const ProjectFeed = () => {

  useEffect(() => {
    const observers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animateOff');
          entry.target.classList.add('animateOn');
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
        <Subheader title='Project Feeds' icon={<LuSearch />} />
        <div className={pageStyles.feed_child2}>
          {
            products?.map((d, i) => (
              <Card
                id={d.id}
                link={d?.link}
                image={d?.image}
                title={d?.title}
                key={i.toString()}
                description={d?.description}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ProjectFeed;
