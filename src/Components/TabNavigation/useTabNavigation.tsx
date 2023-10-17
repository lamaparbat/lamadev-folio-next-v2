

import { getTitleCase } from '@/Utility';
import { useTheme } from 'next-themes';
import { useCallback, useState } from 'react';

const useTabNavigation = () => {
  const [openTabNavigation, setOpenTabNavigation] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { theme, setTheme} = useTheme();

  const currentTheme = theme === 'light' ? 'light' : 'dark';
  const themeTooltipContent = `${getTitleCase(currentTheme)} Theme`;
  
  const redirectTo = (path: string) => window.open(path, "_blank");
  const getCalculatedMargninY = (index: number, totalSize: number) => (index + 1) === totalSize ? "my-0" : "mb-3";
  const handleOpenTabNavigation = useCallback(() => setOpenTabNavigation(!openTabNavigation), [openTabNavigation]);
  const handleTabChange = useCallback((index: number) => setActiveTabIndex(index), [activeTabIndex]);
  const handleChangeTheme = () => setTheme(currentTheme == 'light' ? 'dark' : 'light');

  return {
    theme,
    openTabNavigation,
    activeTabIndex,
    themeTooltipContent,
    redirectTo,
    getCalculatedMargninY,
    handleTabChange,
    handleChangeTheme,
    handleOpenTabNavigation
  }
}

export default useTabNavigation;
