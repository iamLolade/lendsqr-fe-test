import React, { ReactNode } from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import styles from './layout.module.scss'

interface DashboardWrapperProps {
    children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default DashboardWrapper