'use client'

import React, { ReactNode, useState } from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import styles from './layout.module.scss'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';

interface DashboardWrapperProps {
    children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.layout}>
      <Header toggleSidebar={toggleSidebar} />
      <div className={`${styles.main}`}>
        {isSidebarOpen && <HamburgerMenu isOpen={isSidebarOpen} closeSidebar={closeSidebar} />}
        <div className={styles.sidebar}>
          <Sidebar closeSidebar={closeSidebar} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default DashboardWrapper