import Link from 'next/link'

export const HomePage = () => (
  <>
    <h1>home page</h1>
    <div>
      <div>
        <Link href={'/about'}>about</Link>
      </div>
      <div>
        <Link href={'/work'}>work</Link>
      </div>
    </div>
  </>
)
