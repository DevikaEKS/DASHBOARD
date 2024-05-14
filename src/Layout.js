import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="layout">
      {isLargeScreen ? <Sidebar /> : <Navbar />}
      {/* Content */}
    </div>
  );
}

export default Layout;
