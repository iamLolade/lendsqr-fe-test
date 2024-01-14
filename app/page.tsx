import styles from '../styles/globals.module.scss';
import Layout from './components/layout/layout';
import MainComponent from './(dashboard)/[page]'

export default function Home() {
  return (
    <Layout>
      <MainComponent />
    </Layout>
  )
}


