import React from 'react'
import styles from './sidebar.module.scss'
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.switch}>
        <Image src='/icons/briefcase.svg' alt='icon' width={16} height={16} />
        <p>Switch Organization</p>
        <Image src='/icons/downArrow.svg' alt='icon' width={14} height={14} />
      </div>
      <div className={styles.link} style={{ marginBottom: 41 }}>
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
    </div>
  )
}

export default Sidebar;