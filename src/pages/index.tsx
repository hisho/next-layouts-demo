import type { NextPageWithLayout } from 'next'
import { HomePage } from '@src/component/pages/Home'
import { Layout } from '@src/layouts'

const Home: NextPageWithLayout = () => <HomePage />

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
