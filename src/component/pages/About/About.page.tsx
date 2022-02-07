import Link from 'next/link'

export const AboutPage = () => (
  <>
    <h1>about page</h1>
    <div>
      <div>
        <Link href={'/'}>home</Link>
      </div>
      <div>
        <Link href={'/work'}>work</Link>
      </div>
    </div>
  </>
)
