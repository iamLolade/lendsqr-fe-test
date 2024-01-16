'use client'

import React from 'react'
import styles from './users.module.scss'
import Image from 'next/image'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Layout from '../components/layout/Layout'

const page: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <p className={styles.title}>
          Users
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Image src='/icons/users-card.svg' alt='icon' width={40} height={40} />
            <p className={styles.cardTitle}>Users</p>
            <p className={styles.cardValue}>2,453</p>
          </div>
          <div className={styles.card}>
            <Image src='/icons/active-card.svg' alt='icon' width={40} height={40} />
            <p className={styles.cardTitle}>Active Users</p>
            <p className={styles.cardValue}>2,453</p>
          </div>
          <div className={styles.card}>
            <Image src='/icons/loan-card.svg' alt='icon' width={40} height={40} />
            <p className={styles.cardTitle}>Users with Loans</p>
            <p className={styles.cardValue}>12,453</p>
          </div>
          <div className={styles.card}>
            <Image src='/icons/savings-card.svg' alt='icon' width={40} height={40} />
            <p className={styles.cardTitle}>Users with Savings</p>
            <p className={styles.cardValue}>102,453</p>
          </div>
        </div>

        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>organization <Image src='/icons/filter.svg' alt='icon' width={12} height={12} /></th>
                <th>Username <Image src='/icons/filter.svg' alt='icon' width={12} height={12} /></th>
                <th>Email <Image src='/icons/filter.svg' alt='icon' width={12} height={12} /></th>
                <th>Phone number <Image src='/icons/filter.svg' alt='icon' width={12} height={12} /></th>
                <th>Date joined <Image src='/icons/filter.svg' alt='icon' width={12} height={12} /></th>
                <th>Status <Image src='/icons/filter.svg' alt='icon' width={12} height={12} /></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>Inactive</td>
                <td>
                  <div className='dropdown' data-toggle="dropdown" id="#action" aria-expanded="false">
                    <BsThreeDotsVertical color='#213F7D' size={16} className={styles.options} />
                  </div>
                  <div className={`dropdown-menu`} id="action">
                      <div className='p0'>
                          <div 
                              className=''
                          >
                              View Details
                          </div>
                          <div 
                              className=''
                          >
                              Blacklist User
                          </div>
                      </div>      
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lendsqr</td>
                <td>Adedeji</td>
                <td>adedeji@lendsqr.com</td>
                <td>08078903721</td>
                <td>May 15, 2020 10:00 AM</td>
                <td>Inactive</td>
                <td><BsThreeDotsVertical color='#213F7D' size={16} className={styles.options} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default page