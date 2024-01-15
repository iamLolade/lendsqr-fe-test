'use client'

import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className={styles.header}>
      <Image src='/icons/brandLogo.svg' alt='Brand Logo' id={styles.logo} width={144.804} height={30} />
      <RxHamburgerMenu color='#213F7D' size={28} id={styles.hamburger} onClick={toggleSidebar} />
      <div className={styles.inputContainer}>
        <input 
          placeholder='Search for anything'
        />
        <div className={styles.inputIcon}>
          <Image src='/icons/searchIcon.svg' alt='Search Icon' width={14} height={14} />
        </div>
      </div>

      <BsThreeDotsVertical color='#213F7D' size={24} id={styles.option} />
      <div className={styles.profileContainer}>
        <p id={styles.docs}>Docs</p>
        <Image src='/icons/notification.svg' alt='Notification Icon' width={26} height={26} />
        <Image src='/images/avatar.svg' alt='Profile Picture' width={48} height={48} />
        <p>Adedeji</p>
        <MdArrowDropDown color='#213F7D' size={20} />
      </div>
    </div>
  )
}

export default Header