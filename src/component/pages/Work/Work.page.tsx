import Link from 'next/link'

export const WorkPage = () => (
  <>
    <h1>work page</h1>
    <div>
      <div>
        <Link href={'/'}>home</Link>
      </div>
      <div>
        <Link href={'/about'}>about</Link>
      </div>
    </div>
  </>
)
