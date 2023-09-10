

import { useCallback, useState } from 'react';

const useTabNavigation = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const redirectTo = (path: string) => window.open(path, "_blank");
  const handleTabChange = useCallback((index: number) => setActiveTabIndex(index), [activeTabIndex]);
  const getCalculatedMargninY = (index: number, totalSize: number) => ((index === 0) || ((index + 1) === totalSize)) ? "my-0" : "my-3";

  return {
    activeTabIndex,
    redirectTo,
    handleTabChange,
    getCalculatedMargninY,
  }
}

export default useTabNavigation;
