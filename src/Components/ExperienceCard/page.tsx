

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
            <div className='h-[70px] w-[100px] hidden justify-center items-center  rounded border-r-2 border-green-500 sm:flex'>
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
                <div className="flex-between flex-wrap text-[#3d3d3d] leading-[16px] gap-2">
                    <span className="my-1">{position}</span>
                    <span className="font-mono">{engagedDuration}</span>
                </div>
                <div className='flex mt-2 text-[#3d3d3d] leading-[16px]'>
                    <div className='flex-between bg-blue-100 text-black text-xs me-2 p-1 pr-3 rounded'>
                        <BsDot className='text-lg' />
                        <label className='text-sm'>{workingHours}</label>
                    </div>
                    <div className='flex-between mx-3 bg-blue-100 text-black text-xs me-2 p-1 pr-3 rounded'>
                        <BsDot className='text-lg' />
                        <label className='text-sm'>{jobType}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;