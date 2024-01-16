import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { MdOutlineClose } from 'react-icons/md';
import styles from '../sidebar/sidebar.module.scss'

interface MenuProps {
    isOpen: boolean;
    closeSidebar: () => void;
}
  

const HamburgerMenu: React.FC<MenuProps> = ({ isOpen, closeSidebar }) => {
  return (
    <div className={styles.hamburger}>
        <div>
            <Sidebar closeSidebar={closeSidebar} />
        </div>
    </div>
  )
}

export default HamburgerMenu