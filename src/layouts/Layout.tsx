import { ReactElement } from 'react'
import { Footer, Header } from '@src/component/ui'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
