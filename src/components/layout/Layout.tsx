import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Aside from './Aside';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [asideOpen, setAsideOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <div className="flex h-full bg-white dark:bg-black dark:bg-opacity-[0.7]  ">
      <Sidebar isOpen={sidebarOpen} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} onToggleAside={toggleAside} />
        
        <main className="flex-1 overflow-y-auto bg-white dark:bg-black dark:bg-opacity-[0.7]  ">
          {children}
        </main>
      </div>
      
      <Aside isOpen={asideOpen} />
    </div>
  );
};

export default Layout;