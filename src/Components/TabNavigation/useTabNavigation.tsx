

import { useState } from 'react';

const useTabNavigation = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const redirectTo = (path: string) => window.open(path, "_blank");

  return {
    activeTabIndex,
    redirectTo,
  }
}

export default useTabNavigation;
