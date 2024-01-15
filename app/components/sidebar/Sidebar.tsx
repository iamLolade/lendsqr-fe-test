import React from 'react'
import styles from './sidebar.module.scss'
import Image from 'next/image';
import { MdOutlineClose } from "react-icons/md";

interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <nav 
      className={`${styles.sidebar}`} 
    >
      {
        <div className={styles.header}>
          <Image src='/icons/brandLogo.svg' alt='Brand Logo' id={styles.logo} width={130} height={30} />
          <MdOutlineClose size={24} color='#545F7D' onClick={closeSidebar} className={styles.closeButton} />
        </div>
      }
      <div className={styles.switch}>
        <Image src='/icons/briefcase.svg' alt='icon' width={16} height={16} />
        <p>Switch Organization</p>
        <Image src='/icons/downArrow.svg' alt='icon' width={14} height={14} />
      </div>
      <div className={styles.link}>
        <Image src='/icons/home.svg' alt='icon' width={16} height={16} />
        <p>Dashboard</p>
      </div>

      <p className={styles.menu}>Customers</p>
      <div className={`${styles.link} ${styles.active}`}>
        <Image src='/icons/users.svg' alt='icon' width={16} height={16} />
        <p>Users</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/guarantors.svg' alt='icon' width={16} height={16} />
        <p>Guarantors</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/sack.svg' alt='icon' width={16} height={16} />
        <p>Loans</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/handshake.svg' alt='icon' width={16} height={16} />
        <p>Decision Models</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/piggy.svg' alt='icon' width={16} height={16} />
        <p>Savings</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/request.svg' alt='icon' width={16} height={16} />
        <p>Loan Requests</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/user-check.svg' alt='icon' width={16} height={16} />
        <p>Whitelist</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/user-times.svg' alt='icon' width={16} height={16} />
        <p>Karma</p>
      </div>

      <p className={styles.menu}>Businesses</p>
      <div className={styles.link}>
        <Image src='/icons/briefcase.svg' alt='icon' width={16} height={16} />
        <p>Organization</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/request.svg' alt='icon' width={16} height={16} />
        <p>Loan Products</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/bank.svg' alt='icon' width={16} height={16} />
        <p>Savings Products</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/coins.svg' alt='icon' width={16} height={16} />
        <p>Fees and Charges</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/transaction.svg' alt='icon' width={16} height={16} />
        <p>Transactions</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/galaxy.svg' alt='icon' width={16} height={16} />
        <p>Services</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/user-cog.svg' alt='icon' width={16} height={16} />
        <p>Service Account</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/scroll.svg' alt='icon' width={16} height={16} />
        <p>Settlements</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/chart.svg' alt='icon' width={16} height={16} />
        <p>Reports</p>
      </div>

      <p className={styles.menu}>Settings</p>
      <div className={styles.link}>
        <Image src='/icons/sliders.svg' alt='icon' width={16} height={16} />
        <p>Preferences</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/badge-percent.svg' alt='icon' width={16} height={16} />
        <p>Fees and Pricing</p>
      </div>
      <div className={styles.link}>
        <Image src='/icons/clipboard-list.svg' alt='icon' width={16} height={16} />
        <p>Audit Logs</p>
      </div>
    </nav>
  )
}

export default Sidebar;