import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src='/icons/brandLogo.svg' alt='Brand Logo' width={144.804} height={30} />
      <div className={styles.inputContainer}>
        <input 
          placeholder='Search for anything'
        />
        <div className={styles.inputIcon}>
          <Image src='/icons/searchIcon.svg' alt='Search Icon' width={14} height={14} />
        </div>
      </div>
    </div>
  )
}

export default Header