'use client';

import Card from '@/Components/Card';
import Subheader from '@/Components/Subheader/page';
import TabNavigation from '@/Components/TabNavigation';
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
          <Card
            title="Blockchain Election System"
            description="NEXT JS, WEB3, EXPRESS-NODE, MONGODB, METAMASK WALLET"
            image="/images/evoting.png"
            link={{ siteLink: "" }}
            id={0}
          />
          <Card
            title="Clothing Ecommerce Site"
            description="PHP, HTML, CSS, JS, BOOTSTRAP 3, AJAX, JQUERY"
            image="/images/aroma.png"
            link={{ siteLink: "" }}
            id={1}
          />
          <Card
            title="Whatsapp Clone"
            description="REACT JS, NODE JS (Express), MongoDB, JWT, Google Auth"
            image="/images/whatsapp.png"
            link={{ siteLink: "" }}
            id={2}
          />
          <Card
            title="Elibrary"
            description="PHP, HTML, CSS, JS, BOOTSTRAP 3, AJAX, JQUERY"
            image="/images/elibrary.png"
            link={{ siteLink: "" }}
            id={3}
          />
          <Card
            title="Course Management System"
            description="FRONTEND (JAVA SWING), BACKEND (CORE JAVA), NETBEANS IDE"
            image="/images/cms.jpeg"
            link={{ siteLink: "" }}
            id={3}
          />
          <Card
            title="Ecommerce Clothing Brand System"
            description="NEXT JS, TAILWIND CSS, SANITY.IO, MONGODB, "
            image="/images/ecommerce-cms-1.png"
            link={{ siteLink: "" }}
            id={3}
          />
        </div>
      </div>
    </>
  )
}

export default ProjectFeed;
