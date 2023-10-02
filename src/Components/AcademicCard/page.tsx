

import Image from 'next/image';
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
        <div className="w-full flex-between mb-5">
            <Image
                src={logo}
                alt=""
                height={70}
                width={70}
                className="rounded hidden sm:block"
            />
            <div className="sm:mx-5 w-full">
                <div className="flex-between flex-wrap">
                    <span className="text-lg text-black">{collegeName}</span>
                    <HiOutlineExternalLink className='-mt-2 cursor-pointer hover:text-red-500' />
                </div>
                <div className="flex-between flex-wrap">
                    <span className="text-light">{courseName}</span>
                    <span className="text-light font-mono sm:mt-1">{courseDuration}</span>
                </div>
            </div>
        </div>
    )
}

export default AcademicCard;