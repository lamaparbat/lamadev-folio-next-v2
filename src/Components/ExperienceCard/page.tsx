

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
        <div className="w-full flex-between mb-5">
            <Image
                src={logo}
                alt=""
                height={70}
                width={70}
                className="rounded"
            />
            <div className="mx-5 w-full">
                <div className="flex-between flex-wrap">
                    <span className="text-lg text-black">{companyName}</span>
                    <HiOutlineExternalLink className='-mt-2 cursor-pointer hover:text-red-500' />
                </div>
                <div className="flex-between flex-wrap">
                    <span className="text-light">{position}</span>
                    <span className="text-light font-mono sm:mt-1">{engagedDuration}</span>
                </div>
                <div className="flex items-center ">
                    <h5>Skills: </h5>
                    <span className="text-sm text-light m-1 flex flex-wrap">{skills?.join(' , ')}</span>
                </div>
                <div className='flex'>
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