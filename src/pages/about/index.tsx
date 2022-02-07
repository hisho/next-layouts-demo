import type { NextPageWithLayout } from 'next'
import { AboutPage } from '@src/component/pages/About'
import { Layout } from '@src/layouts'

const About: NextPageWithLayout = () => <AboutPage />

About.getLayout = (page) => <Layout>{page}</Layout>

export default About
