

import { useCallback, useState } from 'react';

const useTabNavigation = () => {
  const [openTabNavigation, setOpenTabNavigation] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleOpenTabNavigation = useCallback(() => setOpenTabNavigation(!openTabNavigation), [openTabNavigation]);
  const redirectTo = (path: string) => window.open(path, "_blank");
  const handleTabChange = useCallback((index: number) => setActiveTabIndex(index), [activeTabIndex]);
  const getCalculatedMargninY = (index: number, totalSize: number) => (index + 1) === totalSize ? "my-0" : "mb-3";

  return {
    openTabNavigation,
    activeTabIndex,
    redirectTo,
    handleTabChange,
    getCalculatedMargninY,
    handleOpenTabNavigation
  }
}

export default useTabNavigation;
