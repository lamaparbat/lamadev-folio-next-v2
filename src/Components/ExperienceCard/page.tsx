

import Image from 'next/image';
import React from 'react';
import { ExperienceCardProps } from './types';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';

const ExperienceCard = ({
    logo,
    companyName,
    position,
    engagedDuration,
    skills,
    workingHours,
    jobType
}: ExperienceCardProps) => {
    return (
        <div className="experience_card w-full flex-between mb-5 animateOff">
            <div className='h-[70px] w-[100px] flex justify-center items-center  rounded border-r-2 border-green-500 hidden sm:flex'>
                <img
                    src={logo}
                    alt=""
                />
            </div>
            <div className="mx-0 sm:mx-5 w-full">
                <div className="flex-between flex-wrap">
                    <h2 className="text-lg">{companyName}</h2>
                    <HiOutlineExternalLink className='-mt-2 cursor-pointer hover:text-red-500' />
                </div>
                <div className="flex-between flex-wrap">
                    <span className="">{position}</span>
                    <span className="font-mono sm:mt-1">{engagedDuration}</span>
                </div>
                <div className='flex mt-1'>
                    <div className='flex-between'>
                        <BsDot className='text-lg' />
                        <span className='text-sm'>{workingHours}</span>
                    </div>
                    <div className='flex-between mx-3'>
                        <BsDot className='text-lg' />
                        <span className='text-sm'>{jobType}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;