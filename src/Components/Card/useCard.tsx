'use client';

import { useState } from 'react';

const useCard = () => {
  const [showArrowIcon, setArrowIcon]: any = useState(false);

  const handleMouseOverFooter = (id: string) => setArrowIcon(id);
  const handleMouseLeaveFooter = () => setArrowIcon(null);

  return {
    showArrowIcon,
    handleMouseOverFooter,
    handleMouseLeaveFooter
  }
}

export default useCard;
