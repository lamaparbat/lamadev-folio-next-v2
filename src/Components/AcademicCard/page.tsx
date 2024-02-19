

import React from 'react';
import { AcademicCardProps } from './types';
import { HiOutlineExternalLink } from 'react-icons/hi';

const AcademicCard = ({
    logo,
    collegeName,
    courseName,
    courseDuration
}: AcademicCardProps) => {

    return (
        <div className='sm:ml-[60px] academic_card animateOff w-full flex-between mb-5 sm:shadow-lg dark:bg-zinc-900 dark:shadow-black'>
            <div className='h-[70px] w-[100px] flex justify-center items-center  rounded border-r-2 border-green-500 sm:flex overflow-hidden bg-white'>
                {typeof logo === 'string' ?
                    <img
                        src={logo}
                        alt=""
                    /> : <>{logo}</>
                }
            </div>
            <div className="sm:mx-5 w-full">
                <div className="flex-between flex-wrap">
                    <h2 className="text-lg">{collegeName}</h2>
                    <HiOutlineExternalLink className='-mt-2 cursor-pointer hover:text-red-500' />
                </div>
                <div className="flex-between flex-wrap text-[#3d3d3d]">
                    <span>{courseName}</span>
                    <span className="font-mono sm:mt-1">{courseDuration}</span>
                </div>
            </div>
        </div>
    )
}

export default AcademicCard;