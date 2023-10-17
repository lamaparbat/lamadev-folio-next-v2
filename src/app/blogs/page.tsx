'use client';

import React from 'react';
import { LuSearch } from 'react-icons/lu';
import blogStyles from './styles';
import Subheader from '@/Components/Subheader/page';
import TabNavigation from '@/Components/TabNavigation';

const ProjectFeed = () => {

  return (
    <>
      <TabNavigation />
      <div className='wrapper flex flex-col'>
        <Subheader title='Blog Posts' icon={<LuSearch />} />
      </div>
    </>
  )
}

export default ProjectFeed;
