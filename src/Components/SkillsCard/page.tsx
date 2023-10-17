

import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { SkillsCardProps } from './types';

const SkillsCard = ({
    title,
    items
}: SkillsCardProps) => {

    const [isUiUxBoxOpen, setUIUxBoxOpen] = useState<boolean>(true);

    const handleOpenUiUxBoxOpen = () => {
        setUIUxBoxOpen(!isUiUxBoxOpen);
    }

    return (
        <div className="skill_card h-fit w-full sm:w-[47%]  p-3 rounded-md shadow-inner dark:bg-zinc-900 dark:shadow-black mb-2 animateOff">
            <div className="flex-between cursor-pointer" onClick={handleOpenUiUxBoxOpen}>
                <h4>{title}</h4>
                <BsChevronDown />
            </div>
            {
                isUiUxBoxOpen && (
                    <>
                        <div className="mt-3">
                            {
                                items?.map((d, i) => (
                                    <div className="flex-between mb-2" key={i}>
                                        <span>{d?.name}</span>
                                        {d?.Icon}
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default SkillsCard;