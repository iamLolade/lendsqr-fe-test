'use client'

import React from 'react'
import Wrapper from '../../components/wrapper/Wrapper'
import styles from './user.module.scss'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';


const page = () => {

    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.return}>
                    <Link href='/users'>
                        <HiOutlineArrowNarrowLeft color='#545F7D' size={24} className={styles.pointer} />
                    </Link>
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
        </Wrapper>
    )
}

export default page