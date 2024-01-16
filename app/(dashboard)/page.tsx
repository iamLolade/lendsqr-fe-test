'use client'

import styles from './dashboard.module.scss';
import Layout from '../components/layout/Layout';
import Image from 'next/image';
import { IoIosArrowUp } from "react-icons/io";

export default function Home() {

  return (
    <Layout>
      <div className={styles.container}>
        <p className={styles.title}>
          Dashboard
        </p>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>All loans</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <Image src='/icons/loan-card-purple.svg' alt='icon' width={40} height={40} />
            </div>
            <div className={styles.cardHeader}>
              <p className={styles.cardTitle} style={{ marginBottom: 0 }}>more information</p>
              <div className={styles.line} />
              <IoIosArrowUp color='#545F7D' />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>count</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>disbursed</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>paid</p>
                <p className={styles.cardValue}>0</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>running loans</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <Image src='/icons/loan-card-green.svg' alt='icon' width={40} height={40} />
            </div>
            <div className={styles.cardHeader}>
              <p className={styles.cardTitle} style={{ marginBottom: 0 }}>more information</p>
              <div className={styles.line} />
              <IoIosArrowUp color='#545F7D' />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>count</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>disbursed</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>interest</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>fees</p>
                <p className={styles.cardValue}>0</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>paid loans</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <Image src='/icons/loan-card-lilac.svg' alt='icon' width={40} height={40} />
            </div>
            <div className={styles.cardHeader}>
              <p className={styles.cardTitle} style={{ marginBottom: 0 }}>more information</p>
              <div className={styles.line} />
              <IoIosArrowUp color='#545F7D' />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>count</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>disbursed</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>interest</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>fees</p>
                <p className={styles.cardValue}>0</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>past due loans</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <Image src='/icons/loan-card.svg' alt='icon' width={40} height={40} />
            </div>
            <div className={styles.cardHeader}>
              <p className={styles.cardTitle} style={{ marginBottom: 0 }}>more information</p>
              <div className={styles.line} />
              <IoIosArrowUp color='#545F7D' />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>count</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>disbursed</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>interest</p>
                <p className={styles.cardValue}>0</p>
              </div>
              <div className={styles.tile}>
                <p className={styles.cardTitle}>penalty</p>
                <p className={styles.cardValue}>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


