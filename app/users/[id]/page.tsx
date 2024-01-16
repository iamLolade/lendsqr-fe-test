import React from 'react'
import Layout from '../../components/layout/Layout'
import styles from './user.module.scss'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Image from 'next/image';


const page = () => {
  return (
    <Layout>
        <div className={styles.container}>
            <div className={styles.return}>
                <HiOutlineArrowNarrowLeft color='#545F7D' size={24} />
                <p className={styles.text}>Back to Users</p>
            </div>
            <div className={styles.header}>
                <p className={styles.title}>User Details</p>
                <div className={styles.actions}>
                    <button id={styles.blacklist}>
                        Blacklist User
                    </button>
                    <button>
                        Activate User
                    </button>
                </div>
            </div>

            <div className={styles.summary}>
                <div className={styles.details}>
                    <Image src='/icons/avatar.svg' alt='icon' width={100} height={100} />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default page