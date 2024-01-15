import styles from '../styles/globals.module.scss';
import Layout from './components/layout/Layout';
import MainComponent from './(dashboard)/[page]'

export default function Home() {
  return (
    <Layout>
      <MainComponent />
    </Layout>
  )
}


