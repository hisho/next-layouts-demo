import type { NextPageWithLayout } from 'next'
import { WorkPage } from '@src/component/pages/Work'

const Work: NextPageWithLayout = () => <WorkPage />

Work.getLayout = (page) => (
  <>
    <header>work header</header>
    {page}
    <footer>work footer</footer>
  </>
)

export default Work
